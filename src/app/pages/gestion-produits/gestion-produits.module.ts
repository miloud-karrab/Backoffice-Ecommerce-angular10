import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduitComponent } from './produits/add-produit/add-produit.component';
import { ListProduitComponent } from './produits/list-produit/list-produit.component';
import { AddCategorieComponent } from './categories/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categories/list-categorie/list-categorie.component';
import { GestionProduitsRoutingModule } from './gestion-produits-routing.module';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { FormsModule } from '@angular/forms';
import { ProduitsService } from './service/produits.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateProduitComponent } from './produits/update-produit/update-produit.component';

@NgModule({
  declarations: [AddProduitComponent, ListProduitComponent, AddCategorieComponent, ListCategorieComponent, UpdateProduitComponent],
  imports: [
    CommonModule,
    GestionProduitsRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  providers:[ProduitsService]
})
export class GestionProduitsModule { }
