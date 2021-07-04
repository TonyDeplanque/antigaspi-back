import { Produit } from './produit.model';
import { Aliment } from '../aliment/aliment.model';
import { ProduitException } from './produit-exception.enum';

describe('Produit', () => {
  const aliment = new Aliment(
    'Coca',
    'boisson',
    'http://localhost',
    '123123213123',
    'Ochan',
  );

  it('Créer un nouveau produit sans quantité', () => {
    expect(() => new Produit(aliment, 0, new Date())).toThrow(
      ProduitException.QuantiteNotEmptyException,
    );
  });
  it('Créer un nouveau produit sans date de péremption', () => {
    expect(() => new Produit(aliment, 12, null)).toThrow(
      ProduitException.DateDePeremptionNotEmptyException,
    );
  });

  it('Créer un nouveau produit sans aliment', () => {
    expect(() => new Produit(null, 12, new Date())).toThrow(
      ProduitException.AlimentNotEmptyException,
    );
  });
});
