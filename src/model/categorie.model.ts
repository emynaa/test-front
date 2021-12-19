export interface Categorie{
    _id?:string,
    nom:String,
    SousCategories:String,
    fichiers:String
}
export interface CategoriePage {
    docs:Array<Categorie>;
    total:number;
    limit:number;
    page:number;
    pages:number;
  }
