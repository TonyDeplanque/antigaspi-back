import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AjouterProduitUsecase } from '../../../usecase/ajouter-produit.usecase';
import { Produit } from '../../../domain/frigo/produit/produit.model';
import { AjouterProduitCommand } from '../../../usecase/commands/ajouter-produit .command';
import { Aliment } from '../../../domain/frigo/aliment/aliment.model';
import { ProduitRepository } from '../../../domain/frigo/produit/produit.repository.interface';
import { FrigoRepository } from '../../../domain/frigo/frigo.repository.interface';

@Controller('produits')
export class ProduitController {
  private ajouterProduitUsecase: AjouterProduitUsecase;

  constructor(
    @Inject('ProduitRepository')
    produitRepository: ProduitRepository,
    @Inject('FrigoRepository')
    frigoRepository: FrigoRepository,
  ) {
    this.ajouterProduitUsecase = new AjouterProduitUsecase(
      produitRepository,
      frigoRepository,
    );
  }

  @Post('/')
  ajouterProduit(
    @Body()
    request: {
      frigoId: number;
      aliment: Aliment;
      quantite: number;
      dateDePeremption: Date;
    },
  ): Produit {
    const { frigoId, aliment, quantite, dateDePeremption } = request;
    const ajouterProduitCommand = new AjouterProduitCommand();
    ajouterProduitCommand.aliment = aliment;
    ajouterProduitCommand.quantite = quantite;
    ajouterProduitCommand.dateDePeremption = dateDePeremption;
    ajouterProduitCommand.frigoId = frigoId;

    return this.ajouterProduitUsecase.execute(ajouterProduitCommand);
  }
}
