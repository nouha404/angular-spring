import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { PaginationModel } from '../../core/models/pagination.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input({required:true}) data! : PaginationModel; //data devient un attributpoint d'eclamation veut direque je vais passé les données et il est oligatoire
  @Output() onGetNumberPage: EventEmitter<number> = new EventEmitter<number>() //nom de l'invenement remonté au niveau du parent

  // appel la methode paginate du parent
  paginate(page:number){
    this.onGetNumberPage.emit(page);

  }


}
