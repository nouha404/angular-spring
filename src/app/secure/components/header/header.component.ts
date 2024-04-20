import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: false,
  //imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(private router:Router){
  }
onLoadView() {
  this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
         this.router.navigate([`/admin/commandes/all`])
  })
}


}
