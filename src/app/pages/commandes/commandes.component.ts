import {Component, OnInit} from '@angular/core';
import {RestResponse} from "../../core/models/rest.response";
import {CommandeListe} from "../../core/models/commande.liste";
import {CommandeServiceImpl} from "../../core/services/Impl/commande.service.impl";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import {PaginationModel} from "../../core/models/pagination.model";

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,PaginationComponent],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent implements OnInit {
  response?: RestResponse<CommandeListe[]>
  idClient: string | null="all";
  dataPagination:PaginationModel = {
    pages:[],
    currentPage:0
  };
  //route:ActivatedRoute service qui permet de recuperer  route active
  constructor(
    private commandeService:CommandeServiceImpl,
    private route:ActivatedRoute
    ) {
  }
  ngOnInit(): void {
    this.idClient = this.route.snapshot.paramMap.get("id"); // l'id qui j'ai mis dans client routerLink="/commandes/{{item.id}} et path:"commandes/:id"
    this.refresh();
  }

  refresh(page:number=0){
    this.commandeService.findAll(page,this.idClient).subscribe(
      data=>{
        this.response=data
        console.log(this.response=data);
        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!
      }
    );
  }
  paginate(page:number){
    this.refresh(page);

  }

}
