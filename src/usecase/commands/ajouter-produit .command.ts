import { Aliment } from '../../domain/frigo/aliment/aliment.model';

export class AjouterProduitCommand {
  public frigoId: number;
  public aliment: Aliment;
  quantite: number;
  dateDePeremption: Date;
}
