import { ArticleCatagoue, ArticleModel } from "../models/article.models";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface ArticleService {
  findByLibelle(libelle:string):Observable<RestResponse<ArticleModel>>;
  findAll():Observable<RestResponse<ArticleCatagoue[]>>;
  findById(id:number):Observable<RestResponse<ArticleCatagoue>>;

}
