import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fichier, FichierPage } from 'src/model/fichier.model';
import { FichierService } from '../services/fichier.service';


@Component({
  selector: 'app-fichiers-list',
  templateUrl: './fichiers-list.component.html',
  styleUrls: ['./fichiers-list.component.css']
})
export class FichiersListComponent implements OnInit {
   public fichiers?:FichierPage ;
   public keyword:string="";
  private currentPage:number=1;
  private pageSize:number=5;
  private pages?:Array<number>;
  constructor(private fichierService:FichierService , private router:Router) { }

  ngOnInit(): void {
    this.onSearchFichier();
  }
  
  private onSearchFichier() {
    this.fichierService.searchFichier(this.keyword,this.currentPage,this.pageSize)
      .subscribe(data=>{
        this.fichiers=data;
        this.pages=new Array<number>(data.pages);
      },err=>{
        console.log(err);
      })
   }
   onSearch(data :any) {
    console.log (data);
    this.keyword=data.keyword;
    this.onSearchFichier();
  }
  onNewFichier(){
    this.router.navigateByUrl("/fichier-new");
  }

}
