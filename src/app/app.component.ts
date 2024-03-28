import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ClientImplService} from "./core/services/Impl/client.impl.service";
import {ClientListe} from "./core/models/client.liste";
import {RestResponse} from "./core/models/rest.response";
import {ClientsComponent} from "./core/pages/clients/clients.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientsComponent, ClientsComponent, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'angular-app';

}
