import {ClientListe} from "../models/client.liste";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface ClientService {
  findAll(page:number): Observable<RestResponse<ClientListe[]>>;
}
