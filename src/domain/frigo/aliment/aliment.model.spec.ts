import { Produit } from '../produit/produit.model';
import { Aliment } from './aliment.model';
import { ProduitException } from '../produit/produit-exception.enum';
import { AlimentException } from './aliment-exception.enum';

describe('Aliment', () => {
  it('Créer un nouvel aliment sans nom', () => {
    expect(
      () =>
        new Aliment(
          null,
          'boisson',
          'http://localhost',
          '123123213123',
          'Ochan',
        ),
    ).toThrow(AlimentException.NomNotEmptyException);
  });
  it('Créer un nouvel aliment sans code barre', () => {
    expect(
      () => new Aliment('Coca', 'boisson', 'http://localhost', null, 'Ochan'),
    ).toThrow(AlimentException.CodeBarreNotEmptyException);
  });
});
