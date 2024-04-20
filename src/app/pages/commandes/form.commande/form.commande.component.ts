import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClientImplService } from '../../../core/services/Impl/client.impl.service';
import { Router } from '@angular/router';
import { ArticleServiceImpl } from '../../../core/services/Impl/article.impl.service';

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
    private articleService:ArticleServiceImpl
  ){}

  form = this.formBuilder.group({
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

          }
        })

    }
    }

    addProduitToPanier() {
      throw new Error('Method not implemented.');
      }

    onSubmitForm() {
      throw new Error('Method not implemented.');
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
