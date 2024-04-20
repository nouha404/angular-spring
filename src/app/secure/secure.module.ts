import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';


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
  ]
})
export class SecureModule { }
