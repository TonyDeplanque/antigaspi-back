import { Aliment } from '../aliment/aliment.model';
import { Frigo } from '../frigo';
import { Produit } from './produit.model';

export interface ProduitRepository {
  ajouterProduit(
    frigo: Frigo,
    aliment: Aliment,
    quantite: number,
    dateDePeremption: Date,
  ): Produit;

  mettreAJourProduit(
    produitId: number,
    quantite?: number,
    dateDePeremption?: Date,
  ): Produit;
}
