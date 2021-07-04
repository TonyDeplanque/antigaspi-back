import { Aliment } from '../aliment/aliment.model';
import { ProduitException } from './produit-exception.enum';

export class Produit {
  id?: number;
  aliment: Aliment;
  quantite: number;
  dateDePeremption: Date;

  constructor(
    aliment: Aliment,
    quantite: number,
    dateDePeremption: Date,
    id?: number,
  ) {
    this.aliment = aliment;
    this.quantite = quantite;
    this.dateDePeremption = dateDePeremption;
    this.id = id;
    this.validate();
  }

  validate(): void {
    if (this.quantite <= 0) {
      throw Error(ProduitException.QuantiteNotEmptyException);
    }

    if (!this.dateDePeremption) {
      throw Error(ProduitException.DateDePeremptionNotEmptyException);
    }

    if (!this.aliment) {
      throw Error(ProduitException.AlimentNotEmptyException);
    }
  }
}
