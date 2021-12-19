import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http'
import { FichiersNewComponent } from './fichiers-new/fichiers-new.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesNewComponent } from './categories-new/categories-new.component';
import { FormsModule } from '@angular/forms';
import { FichiersListComponent } from './fichiers-list/fichiers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FichiersNewComponent,
    FichiersListComponent,
    CategoriesListComponent,
    CategoriesNewComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
