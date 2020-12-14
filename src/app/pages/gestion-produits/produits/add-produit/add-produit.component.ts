import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { CategoriesService } from '../../service/categories.service';
import { ProduitsService } from '../../service/produits.service';

@Component({
  selector: 'ngx-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {


  p: Produit = new Produit();
  categories = [];

  constructor(private s : ProduitsService,
    private sCategorie : CategoriesService) { }

  ngOnInit(): void {
    this.sCategorie.getCategories().subscribe(
      response => 
      {
        this.categories = response;
        console.log(this.categories);
      }
    );
  }

  save(){
    console.log('save');
    console.log(this.p);
    this.s.addProduit(this.p);
    this.p = new Produit();
    console.log('ok');
  }

}
