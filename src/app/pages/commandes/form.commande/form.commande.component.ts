import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientImplService } from '../../../core/services/Impl/client.impl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form.commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.commande.component.html',
  styleUrl: './form.commande.component.css'
})
export class FormCommandeComponent implements OnInit{
  constructor(private clientService:ClientImplService,private router:Router){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*commandeCreate:CommandeCreate={
    nomComplet:"", // chaine vide au demarage le formulaire ne contient rient
    telephone : "",
    quartier : "",
    numVilla : "",
    ville: ""
  }*/

}
