import { Routes } from '@angular/router';
import {ClientsComponent} from "./pages/clients/clients.component";
import {CommandesComponent} from "./pages/commandes/commandes.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import { FormClientComponent } from './pages/clients/form.client/form.client.component';
import { FormCommandeComponent } from './pages/commandes/form.commande/form.commande.component';

export const routes: Routes = [
  {
    path:"clients",

    children: [
      {
        path:"",
        component:ClientsComponent,
      },
      {
        path:"form",
        component:FormClientComponent
      },
    ]
  },
  {
    path:"form-comande",
    component:FormCommandeComponent,
  },

  {
    path:"commandes/:id",
    component:CommandesComponent,
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
