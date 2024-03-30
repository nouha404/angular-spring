import { Injectable } from '@angular/core';
import {ClientService} from "../client.service";
import { ClientListe } from '../../models/client.liste';
import { RestResponse } from '../../models/rest.response';
import {environment} from "../../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// si je commente, je doit le mettre dans le component qui demande clientServce
@Injectable({
  providedIn: 'root'
})
export class ClientImplService implements ClientService {
  private API_URL = `${environment.API_URL}/clients`

  constructor(private http:HttpClient) {
  }

  findAll(page:number,keyword:string=""): Observable<RestResponse<ClientListe[]>> {
        return  this.http.get<RestResponse<ClientListe[]>>(`${this.API_URL}?page=${page}&keyword=${keyword}`);
    }
}
