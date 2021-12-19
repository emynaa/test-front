import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie, CategoriePage } from 'src/model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  public host:string="http://localhost:8085";
  constructor(private httpClient:HttpClient) { }

  public searchCategories(keyword:string, page:number, size:number):Observable<CategoriePage>{
    return this.httpClient.get<CategoriePage>(this.host+"/categories-search?kw="+keyword+"&page="+page+"&size="+size);
  }

  public saveCategorie(categorie:Categorie):Observable<Categorie>{
    return this.httpClient.post<Categorie>(this.host+"/categories",categorie);
  }
}
