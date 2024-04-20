import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CommandeServiceImpl } from '../core/services/Impl/commande.service.impl';


@NgModule({
  declarations: [
    //les modules a charger au demarrage de ce module secure
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule

  ],
  exports:[
    HeaderComponent
  ],
  providers: [
    CommandeServiceImpl,
  ],
})
export class SecureModule { }
