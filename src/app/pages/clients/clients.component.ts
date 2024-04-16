import {Component, OnInit} from '@angular/core';
import {RestResponse} from "../../core/models/rest.response";
import {ClientListe} from "../../core/models/client.liste";
import {ClientImplService} from "../../core/services/Impl/client.impl.service";
import {CommonModule} from "@angular/common";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import {PaginationModel} from "../../core/models/pagination.model";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive, PaginationComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{
  response?: RestResponse<ClientListe[]> // les données reels
  dataPagination:PaginationModel = {
    pages:[],
    currentPage:0
  }; //je vais l'uitlialiser
  constructor(private clientService:ClientImplService) {
  }
  // au lieu de mettre this.clientService.findAll().subscribe(data=>this.response=data); dans ngOnInt je le mets dans un fonction
  ngOnInit(): void {
    this.refresh();

  }

  // l'observable
  refresh(page:number=0,keyword=''){
    this.clientService.findAll(page,keyword).subscribe(
      data=>{
        this.response=data;
        //remplis le dataPagination
        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!


      }
    );


  }



  paginate(page:number){
    this.refresh(page);

  }
  searchTel(telephone: string){
    if (telephone.length>=3){
        this.refresh(0,telephone)
    }
  }
}
