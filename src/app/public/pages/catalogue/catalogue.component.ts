import { Component, OnInit, inject } from '@angular/core';
import { ArticleServiceImpl } from '../../../core/services/Impl/article.impl.service';
import { ArticleCatagoue } from '../../../core/models/article.models';
import { RestResponse } from '../../../core/models/rest.response';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  //une autre maniere d'injection de dependance
  private articleService:ArticleServiceImpl = inject(ArticleServiceImpl);
  response!:RestResponse<ArticleCatagoue[]>


  ngOnInit(): void {
    this.articleService.findAll().subscribe(data=>{
      if(data.statuts==200){
        this.response=data
      }
    })
  }

}
