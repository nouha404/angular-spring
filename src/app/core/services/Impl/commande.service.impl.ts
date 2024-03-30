import {CommandeService} from "../commande.service";
import {Observable} from "rxjs";
import {RestResponse} from "../../models/rest.response";
import {CommandeListe} from "../../models/commande.liste";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable()
export class CommandeServiceImpl implements CommandeService{
  private API_URL = `${environment.API_URL}/commandes`
  constructor(private http:HttpClient) {
  }

  findAll(page: number,idClient: string | null): Observable<RestResponse<CommandeListe[]>> {
    // si id client = all sinon commandes/client/id
    const url:string =idClient=="all"? `${this.API_URL}?page=${page}` : `${this.API_URL}/client/${idClient}?page=${page}` ;
    return  this.http.get<RestResponse<CommandeListe[]>>(url);
  }
}
