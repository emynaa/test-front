import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/model/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.css']
})
export class CategoriesNewComponent implements OnInit {
 
  public categorie!:Categorie;
  public mode:number=0;

  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.initCategorie();
  }
  private initCategorie() {
    this.categorie={nom:"",SousCategories:"",fichiers:""};
  }

  onSaveCategorie(data: Categorie) {
    this.categorieService.saveCategorie(data)
      .subscribe(res=>{
        this.categorie=res;
        this.mode=1;
      },err=>{
         console.log(err);
      })
  }

  onNewBook() {
    this.initCategorie();
    this.mode=0;
  }

}
