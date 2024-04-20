import { Routes } from '@angular/router';
import {ClientsComponent} from "./secure/pages/clients/clients.component";
import {CommandesComponent} from "./secure/pages/commandes/commandes.component";
import {PageNotFoundComponent} from "./secure/pages/page-not-found/page-not-found.component";
import { FormClientComponent } from './secure/pages/clients/form.client/form.client.component';
import { FormCommandeComponent } from './secure/pages/commandes/form.commande/form.commande.component';
import { inject } from '@angular/core';
import { AuthentificateService } from './core/services/auth/authentificate.service';

export const routes: Routes = [
  {
    path:"admin",
    loadChildren:()=> import("./secure/secure.module").then(module=>module.SecureModule),  //charger les modules
    canMatch:[()=>inject(AuthentificateService).isAuthentificated] //ne doit etre charger que si on est connecte
  },

  {
    path:"client",
    loadChildren:()=> import("./public/public.module").then(module=>module.PublicModule),  //charger les modules
  },
  {
    path: '',
    redirectTo:'/admin/clients',
    pathMatch : "full"
  },
  {
    path:"**",
    component: PageNotFoundComponent // faut toujours mettre cette path en bas
  }
];
