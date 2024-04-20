import { Injectable } from '@angular/core';
import { RestResponse } from '../../models/rest.response';
import {environment} from "../../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { ArticleService } from '../article.service';
import { ArticleCatagoue, ArticleModel } from '../../models/article.models';

// si je commente, je doit le mettre dans le component qui demande clientServce
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceImpl implements ArticleService {
  private API_URL = `${environment.API_URL}/articles`

  constructor(private http:HttpClient) {
  }
  findAll(): Observable<RestResponse<ArticleCatagoue[]>> {
    return  this.http.get<RestResponse<ArticleCatagoue[]>>(`${this.API_URL}`)
  }

  findById(id: number): Observable<RestResponse<ArticleCatagoue>> {
       return  this.http.get<RestResponse<ArticleCatagoue>>(`${this.API_URL}/${id}`)
  }
  findByLibelle(libelle: string): Observable<RestResponse<ArticleModel>> {
    return  this.http.get<RestResponse<ArticleModel>>(`${this.API_URL}/libelle/${libelle}`);
  }



}
