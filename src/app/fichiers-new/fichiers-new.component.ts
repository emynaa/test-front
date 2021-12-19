import { Component, OnInit } from '@angular/core';
import { Fichier } from 'src/model/fichier.model';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-fichiers-new',
  templateUrl: './fichiers-new.component.html',
  styleUrls: ['./fichiers-new.component.css']
})
export class FichiersNewComponent implements OnInit {
  public fichier!:Fichier;
  public mode:number=0;
  constructor(private fichierService:FichierService) { }

  ngOnInit(): void {
    this.initFichier();
  }
  private initFichier() {
    this.fichier={nom:"",taille:"",lien:"",categorie:"",sousCategorie:""};
  }

  onSaveFichier(data: Fichier) {
    this.fichierService.saveFichier(data)
      .subscribe(res=>{
        this.fichier=res;
        this.mode=1;
      },err=>{
         console.log(err);
      })
  }

  onNewFichier() {
    this.initFichier();
    this.mode=0;
  }

}
