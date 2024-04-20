import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  //j'enles les composant standalone au niveau de mes modules ici. Pas de layout standalone, I dont want but des que le module sois charger que le layout se charge automatique aussi idem header
  //imports: [RouterOutlet, ClientsComponent, ClientsComponent, HeaderComponent],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //providers: [CommandeServiceImpl],
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'angular-app';
}
