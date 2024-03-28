import {Component, OnInit} from '@angular/core';
import {RestResponse} from "../../models/rest.response";
import {ClientListe} from "../../models/client.liste";
import {ClientImplService} from "../../services/Impl/client.impl.service";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
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
    console.log(this.refresh());

  }



  // l'observable
  refresh(page:number=0){
    this.clientService.findAll(page).subscribe(
      data=>this.response=data
    );


  }


  paginate(page:number){
    this.refresh(page);

  }
}
