import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ClientImplService} from "./core/services/Impl/client.impl.service";
import {ClientListe} from "./core/models/client.liste";
import {RestResponse} from "./core/models/rest.response";
import {ClientsComponent} from "./core/pages/clients/clients.component";
import {CommandeServiceImpl} from "./core/services/Impl/commande.service.impl";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientsComponent, ClientsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  providers: [CommandeServiceImpl],
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'angular-app';
}
