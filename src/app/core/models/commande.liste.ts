import {EtatCommande} from "./enums/etat.commande";
import {Adresse} from "./adresse";
import { ArticleModel } from "./article.models";
import { ClientFormCommande } from "./client.liste";

export interface CommandeListe {
  id : number,
  dateCommand : string,
  montant : number,
  etat : EtatCommande,
  etatSuivant : EtatCommande,
  adresse : Adresse
}


export interface CommandeCreateForm {
  articlesPanier?: unknown[] | undefined,
  total?:number | null | undefined,

  client?: Partial<{
      id: any;
      nomComplet: null;
      telephone: string | null;
      adresseComplet: null;
  }> | undefined;

}
