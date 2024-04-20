import { Component } from '@angular/core';
import { ClientCreate } from '../../../../core/models/client.liste';
import { FormsModule } from '@angular/forms';
import { ClientImplService } from '../../../../core/services/Impl/client.impl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form.client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.client.component.html',
  styleUrl: './form.client.component.css'
})
export class FormClientComponent {
  constructor(private clientService:ClientImplService,private router:Router){}
  errors:any;
  clientCreate:ClientCreate={
    nomComplet:"", // chaine vide au demarage le formulaire ne contient rient
    telephone : "",
    quartier : "",
    numVilla : "",
    ville: ""
  }
  //balancer mes données
  onSaveFormulaire() {
    this.clientService.create(this.clientCreate).subscribe(data=>{
      if(data.statuts==201){
          this.router.navigateByUrl('/clients')
      } else{
        this.errors=data.results;
      }
    });
    }

}
