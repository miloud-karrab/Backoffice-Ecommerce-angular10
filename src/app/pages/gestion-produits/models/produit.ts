import { Categorie } from './categorie';

export class Produit
{
    id? : number;
    label : string;
    picture? : string;
    description:string;
    prix:number;
    //
    idCategorie : number;
    // categorie : Categorie
}