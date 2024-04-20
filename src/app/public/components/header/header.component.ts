import { Component, inject } from '@angular/core';
import { AuthentificateService } from '../../../core/services/auth/authentificate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
  //version sale de cacher des elements selon condition etc
  public authService:AuthentificateService=inject(AuthentificateService) // sera accessible au niveau du template
  //version propre avec les directives


}
