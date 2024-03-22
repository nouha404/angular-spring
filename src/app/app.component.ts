import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClientImplService} from "./core/services/Impl/client.impl.service";
import {ClientListe} from "./core/models/client.liste";
import {RestResponse} from "./core/models/rest.response";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  response?: RestResponse<ClientListe[]> // les données reels
  constructor(private clientService:ClientImplService) {
  }

  // l'observable doit s'abonner
  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      data=>this.response=data
    );
  }
}
