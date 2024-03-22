import {ClientListe} from "../models/client.liste";
import {RestResponse} from "../models/rest.response";
import {Observable} from "rxjs";

export interface AbstractClient {
  findAll(): Observable<RestResponse<ClientListe[]>>;
}
