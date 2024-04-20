import { NgIf } from '@angular/common';
import { Directive, OnInit, inject } from '@angular/core';
import { AuthentificateService } from '../services/auth/authentificate.service';

@Directive({
  selector: '[IfAuthentificated]', //non du directive
  standalone: true,
  hostDirectives: [{
    directive:NgIf // directive que je veux redefinir
  }]
})
export class IfAuthentificatedDirective implements OnInit {

  //authService.isAuthentificated dans ma directive
  private authService:AuthentificateService=inject(AuthentificateService)
  //la directive
  private ngDirective:NgIf=inject(NgIf)

  ngOnInit(): void {
    this.ngDirective.ngIf=this.authService.isAuthentificated
  }



}
