import {Component, OnInit} from '@angular/core';
import {RestResponse} from "../../models/rest.response";
import {ClientListe} from "../../models/client.liste";
import {ClientImplService} from "../../services/Impl/client.impl.service";
import {CommonModule} from "@angular/common";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{
  response?: RestResponse<ClientListe[]> // les données reels
  constructor(private clientService:ClientImplService) {
  }
  // au lieu de mettre this.clientService.findAll().subscribe(data=>this.response=data); dans ngOnInt je le mets dans un fonction
  ngOnInit(): void {
    this.refresh();

  }

  // l'observable
  refresh(page:number=0,keyword : string = ""){
    this.clientService.findAll(page,keyword).subscribe(
      data=>this.response=data
    );


  }


  paginate(page:number){
    this.refresh(page);

  }
  searchTel(telephone: string){
    if (telephone.length>=4){
        this.refresh(0,telephone)
    }
  }
}
