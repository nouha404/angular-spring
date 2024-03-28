import { Routes } from '@angular/router';
import {ClientsComponent} from "./core/pages/clients/clients.component";
import {CommandesComponent} from "./core/pages/commandes/commandes.component";
import {PageNotFoundComponent} from "./core/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path:"clients",
    component:ClientsComponent
  },
  {
    path:"commandes",
    component:CommandesComponent
  },
  {
    path: '',
    redirectTo:'/clients',
    pathMatch : "full"
  },
  {
    path:"**",
    component: PageNotFoundComponent // faut toujours mettre cette path en bas
  }
];
