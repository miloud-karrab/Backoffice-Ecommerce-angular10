import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProduitComponent } from './produits/add-produit/add-produit.component';
import { ListProduitComponent } from './produits/list-produit/list-produit.component';
import { AddCategorieComponent } from './categories/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categories/list-categorie/list-categorie.component';


const routes: Routes = [
  {
    path : 'add-product',
    component : AddProduitComponent
  },
  {
    path : 'list-product',
    component : ListProduitComponent
  },
  {
    path : 'add-category',
    component : AddCategorieComponent
  },
  {
    path : 'list-category',
    component : ListCategorieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProduitsRoutingModule {
}
