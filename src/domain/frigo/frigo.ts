import { Produit } from './produit/produit.model';

export class Frigo {
  id: number;
  produits?: Produit[] = [];

  constructor(id: number, produits?: Produit[]) {
    this.id = id;
    this.produits = produits;
  }
}
