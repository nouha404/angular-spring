import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {
  isAuthentificated=false //on simule slm pour tester
  constructor() { }
}
