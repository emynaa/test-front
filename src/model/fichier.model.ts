export interface Fichier{
    _id?:string,
    nom:String,
    taille:String, 
    lien:String, 
    categorie:String, 
    sousCategorie:String
}
export interface FichierPage {
    docs:Array<Fichier>;
    total:number;
    limit:number;
    page:number;
    pages:number;
  }