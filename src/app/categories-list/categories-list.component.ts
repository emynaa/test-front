import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie, CategoriePage } from 'src/model/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

   public categories?: CategoriePage  ;
   public keyword:string="";
  private currentPage:number=1;
  private pageSize:number=5;
  private pages?:Array<number>;
  constructor(private categorieService:CategorieService ,private router:Router) { }

  ngOnInit(): void {
    this.onSearchCategories();
  }

  private onSearchCategories() {
    this.categorieService.searchCategories(this.keyword,this.currentPage,this.pageSize)
      .subscribe(data=>{
        this.categories=data;
        this.pages=new Array<number>(data.pages);
      },err=>{
        console.log(err);
      })
   }
   onSearch(data :any) {
    console.log (data);
    this.keyword=data.keyword;
    this.onSearchCategories();
  }

  onNewCategorie() {
    this.router.navigateByUrl("/categories-new");
  }
}
