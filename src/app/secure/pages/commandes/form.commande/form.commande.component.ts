import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClientImplService } from '../../../../core/services/Impl/client.impl.service';
import { Router } from '@angular/router';
import { ArticleServiceImpl } from '../../../../core/services/Impl/article.impl.service';
import { CommandeServiceImpl } from '../../../../core/services/Impl/commande.service.impl';

@Component({
  selector: 'app-form.commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.commande.component.html',
  styleUrl: './form.commande.component.css'
})
export class FormCommandeComponent implements OnInit{


  constructor(
    private clientService:ClientImplService,
    private router:Router,
    private formBuilder : FormBuilder,
    private articleService:ArticleServiceImpl,
    private commandeService:CommandeServiceImpl,
  ){}

  form = this.formBuilder.group({
    articlesPanier:this.formBuilder.array([],Validators.min(1)), // pour qu'il ne le prend pas comme un formgrouppe
    total:new  FormControl(0,[]),
    //deuxieme formulaire
    client:this.formBuilder.group({
      id:new FormControl(),
      nomComplet:[],           //new FormControl("") // il est generer donc on unitialise a vide ou bien on mets [],
      telephone:["",[Validators.required,Validators.pattern("^(77|76|78){1}[0-9]{7}")] ],  //champ de recherche doit etre valide
      adresseComplet:[]
    }),
    //troisieme formulaire
    article:this.formBuilder.group({
      id:[],
      libelle:["",[Validators.required,Validators.minLength(5)]],
      montant:[],
      quantite:[0,[Validators.required,Validators.min(1)]],
      qteStock:[],
      prix:[]

    },{
      Validators:this.validateQteCommande()
    })

  });

  //getter
  get client(){
    return this.form.controls["client"] as FormGroup //recuperer le champ tel de form = this.formBuilder. Et le convertir en formgroup
  }

  get article(){
    return this.form.controls["article"] as FormGroup
  }
  get total(){
    return this.form.controls["total"] as FormControl
  }
  get articlesPanier(){
    return this.form.controls["articlesPanier"] as FormArray
  }


  onSearchClientByTel() {
    let tel =this.client.get("telephone")?.value
    //eviter de faire la recherche a chaque fois qu'il tape vue que c'est un keyup
    if (tel?.length==9) {
      //des qu'il recuperer il subsribe et test le status du response
      this.clientService.findByTel(tel).subscribe(response=>{
        if (response.statuts==201) {
          //charger sur le formulaire
          //const {numVilla,quartier, ...data} = response.results //destruction , recuperer les champs enumerer et les autres champ non enumerer il laisse dans data. vu que je nai pas le meme dto en back et flemme daller laba
          this.client.patchValue(response.results) //ecrase les anciens donnée pour les nouveaux
          console.log(response.results);

        }

        if(tel?.length>9){
          //vider le champ
          this.client.reset()
        }

      })

    }

  }

    onSearchProduitByLibelle() {
      let libelle =this.article.get("libelle")?.value
      if (libelle?.length>=5) {

        this.articleService.findByLibelle(libelle).subscribe(response=>{
          if (response.statuts==201) {
            this.article.patchValue(response.results)
            let position:number = this.articlesPanier.getRawValue().findIndex(article=>article.id==this.article.get("id")?.value) //retourne un tableaud'objet se trouvant dans le panier. Si l'id de larticle = larticle que je veux ajouter...
            //se trouve dans le panier
            if(position!=-1){
              //larticle qui est dans le panier
              const articleDuPanier = this.articlesPanier.at(position)
              //sa quantite du tableau
              let qte = Number.parseInt(articleDuPanier.get("quantite")?.value)

              this.article.get("qteStock")?.setValue(this.article.get("qteStock")?.value - qte )
            }

          }
        })

    }
    }



    addProduitToPanier() {
      //articlesPanier prendre clone de l'objet
      let prix:number = this.article.get("prix")?.value
      let qantiteCommande:number = this.article.get("quantite")?.value
      let montant:number = prix * qantiteCommande;
      //nouvelle valeur du total
      this.total.setValue(this.total.value+montant)
      this.article.get("montant")?.setValue(montant)

      //recupere larticle du tableau , compare son id avec l'id de celle que je veux ajouter
      let position:number = this.articlesPanier.getRawValue().findIndex(article=>article.id==this.article.get("id")?.value) //retourne un tableaud'objet se trouvant dans le panier. Si l'id de larticle = larticle que je veux ajouter...

      if(position==-1){
        //n'existe pas donc on ajoute
        this.articlesPanier.push(this.formBuilder.group({
          id:[this.article.get("id")?.value],
          libelle:[this.article.get("libelle")?.value],
          montant:[this.article.get("montant")?.value],
          quantite:[this.article.get("quantite")?.value],
          qteStock:[this.article.get("qteStock")?.value],
          prix:[this.article.get("prix")?.value]

        })) //son copie, son clone


      }else{
          //recuperer la valeur de la tableau et la modifier
          const articleDuPanier = this.articlesPanier.at(position)
          articleDuPanier.get("quantite")?.setValue(Number.parseInt(articleDuPanier.get("quantite")?.value+qantiteCommande))
          articleDuPanier.get("montant")?.setValue(articleDuPanier.get("montant")?.value+montant)
      }
      this.article.reset()


      }



    onSubmitForm() {
      //on envoie la form ou ya le client, le total et la list genre des elemnts du panier sans l'article donc
      const {article,...panier} = this.form.value // enleve article dans le reste mets le dans panier

      //CommandeCreateForm
      this.commandeService.create(panier).subscribe(data=>{
        if(data.statuts==204){
          console.log("creation reussi");
          this.form.reset()
          this.router.navigateByUrl("/admin/commandes/all")
        }
      })
      }

      //retourn une interface
    validateQteCommande() : ValidatorFn{
      //cette validator sapplique sur quantite et qteStock

      return (control:AbstractControl): ValidationErrors|null=>{
        //recuperer les deux champs
        const qteCommande = this.article.get("quantite")?.value
        const qteStock = this.article.get("qteStock")?.value

        if(isNaN(Number.parseInt(qteCommande))){ //essai de convertir et ce n'est pas un nombre :
          return {'isNotNumber':true}

        }

        if(Number.parseInt(qteCommande) > Number.parseInt(qteStock)  ){
          return {'qteIsNotValid':true}

        }

        return null; //tout est valide s'il arrive sur return null

      };

    }

  ngOnInit(): void {
    console.log("innit");

  }


}
