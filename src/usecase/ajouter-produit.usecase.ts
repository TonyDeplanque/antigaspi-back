import { ProduitRepository } from '../domain/frigo/produit/produit.repository.interface';
import { AjouterProduitCommand } from './commands/ajouter-produit .command';
import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { Produit } from '../domain/frigo/produit/produit.model';

export class AjouterProduitUsecase {
  constructor(
    private readonly produitRepository: ProduitRepository,
    private readonly frigoRepository: FrigoRepository,
  ) {}

  execute(ajouterProduitCommand: AjouterProduitCommand): Produit {
    const { frigoId, aliment, dateDePeremption, quantite } =
      ajouterProduitCommand;

    const frigo = this.frigoRepository.recupererFrigo(frigoId);

    const produitDejaExistant = frigo.produits.find(
      (produit) =>
        produit.aliment.codebarre === aliment.codebarre &&
        produit.dateDePeremption === dateDePeremption,
    );

    if (produitDejaExistant) {
      const nouvelleQuantite = produitDejaExistant.quantite + quantite;
      return this.produitRepository.mettreAJourProduit(
        produitDejaExistant.id,
        nouvelleQuantite,
      );
    } else {
      return this.produitRepository.ajouterProduit(
        frigo,
        aliment,
        quantite,
        dateDePeremption,
      );
    }
  }
}
