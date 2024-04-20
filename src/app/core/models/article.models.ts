export interface ArticleModel {
  id : number,
  libelle: string;
  montant:number;
  quantite:number;
  prix:number;

}


export interface ArticleCatagoue {
  id : number,
  libelle: string;
  ancientPrix: number,
  nouveauPrix:number,
  promo:boolean
  quantite:number;
  photo:string;

}
