export interface ClientListe {
  id : number,
  nomComplet : string,
  telephone : string
  quartier : string,
  numVilla : string,
  ville : string,
  adresseComplet : string
}

export interface ClientCreate {
  id? : number,
  nomComplet : string,
  telephone : string
  quartier : string,
  numVilla : string,
  ville : string,
}

export interface ClientFormCommande {
  id : number,
  nomComplet : string,
  telephone : string
  adresseComplet : string
}
