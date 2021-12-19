import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichier, FichierPage } from 'src/model/fichier.model';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  public host:string="http://localhost:8085";

  constructor(private httpClient:HttpClient) { }

  public searchFichier(keyword:string, page:number, size:number):Observable<FichierPage>{
    return this.httpClient.get<FichierPage>(this.host+"/fichiers-search?kw="+keyword+"&page="+page+"&size="+size);
  }

  public saveFichier(fichier:Fichier):Observable<Fichier>{
    return this.httpClient.post<Fichier>(this.host+"/fichiers",fichier)
  }

}
