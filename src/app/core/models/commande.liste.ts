import {EtatCommande} from "./enums/etat.commande";
import {Adresse} from "./adresse";

export interface CommandeListe {
  id : number,
  dateCommand : string,
  montant : number,
  etat : EtatCommande,
  etatSuivant : EtatCommande,
  adresse : Adresse
}
