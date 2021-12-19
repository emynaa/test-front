import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesNewComponent } from './categories-new/categories-new.component';
import { FichiersListComponent } from './fichiers-list/fichiers-list.component';
import { FichiersNewComponent } from './fichiers-new/fichiers-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"categories-new",component:CategoriesNewComponent},
  {path:"categories-list", component:CategoriesListComponent},
  {path:"fichiers-list", component:FichiersListComponent},
  {path:"fichiers-new",component:FichiersNewComponent},
  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
