import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }


  categories: Categorie[]
    = [
      {
        id: 1,
        libelle: 'Hi Tech'
      },
      {
        id: 2,
        libelle: 'Maison & décoration'
      }
    ];


    getCategories():Observable<Categorie[]>
    {
      return of(this.categories);
    }

}
