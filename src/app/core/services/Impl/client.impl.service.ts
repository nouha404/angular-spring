import { Injectable } from '@angular/core';
import {AbstractClient} from "../abstract.client";
import { ClientListe } from '../../models/client.liste';
import { RestResponse } from '../../models/rest.response';
import {environment} from "../../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientImplService implements AbstractClient {
  private API_URL = `${environment.API_URL}/clients`

  constructor(private http:HttpClient) {
  }

  findAll(): Observable<RestResponse<ClientListe[]>> {
        return  this.http.get<RestResponse<ClientListe[]>>(this.API_URL);
    }
}
