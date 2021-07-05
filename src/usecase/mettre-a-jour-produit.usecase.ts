import { ProduitRepository } from '../domain/frigo/produit/produit.repository.interface';
import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { Produit } from '../domain/frigo/produit/produit.model';
import { Inject } from '@nestjs/common';
import { MettreAJourProduitCommand } from './commands/mettre-a-jour-produit.command';

export class MettreAJourProduitUsecase {
  constructor(
    @Inject('ProduitRepository')
    private readonly produitRepository: ProduitRepository,
    @Inject('FrigoRepository')
    private readonly frigoRepository: FrigoRepository,
  ) {}

  async execute(
    mettreAJourProduitCommand: MettreAJourProduitCommand,
  ): Promise<Produit> {
    const { produitId, dateDePeremption, quantite } = mettreAJourProduitCommand;

    return await this.produitRepository.mettreAJourProduit(
      produitId,
      quantite,
      dateDePeremption,
    );
  }
}
