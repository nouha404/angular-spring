import {ClientCreate, ClientFormCommande, ClientListe} from "../models/client.liste";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface ClientService {
  findAll(page:number,keyword:string): Observable<RestResponse<ClientListe[]>>;
  create(clientCreate:ClientCreate): Observable<RestResponse<ClientCreate[]>>;
  findByTel(telephone:string):Observable<RestResponse<ClientFormCommande>>;

}
