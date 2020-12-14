import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable(
  /*{
  providedIn: 'root'
}*/
)
export class ProduitsService {

  constructor() { }

  produits : Produit[]=[{label: "bgfdgdf", prix: 75, idCategorie: 2, description: "fgdf"}];

  listerProduits()
  {
    return this.produits;
  }

  addProduit(p:Produit)
  {
    this.produits.push(p);
    console.log(this.produits);
  }
}
