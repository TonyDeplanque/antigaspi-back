import { Body, Controller, Inject, Param, Post, Put } from '@nestjs/common';
import { AjouterProduitUsecase } from '../../../usecase/ajouter-produit.usecase';
import { Produit } from '../../../domain/frigo/produit/produit.model';
import { AjouterProduitCommand } from '../../../usecase/commands/ajouter-produit.command';
import { Aliment } from '../../../domain/frigo/aliment/aliment.model';
import { ProduitRepository } from '../../../domain/frigo/produit/produit.repository.interface';
import { FrigoRepository } from '../../../domain/frigo/frigo.repository.interface';
import { MettreAJourProduitCommand } from '../../../usecase/commands/mettre-a-jour-produit.command';
import { MettreAJourProduitUsecase } from '../../../usecase/mettre-a-jour-produit.usecase';

@Controller('produits')
export class ProduitController {
  constructor(
    private readonly ajouterProduitUsecase: AjouterProduitUsecase,
    private readonly mettreAJourProduitUsecase: MettreAJourProduitUsecase,
  ) {}

  @Post('/')
  async ajouterProduit(
    @Body()
    request: {
      frigoId: number;
      codebarre: string;
      quantite: number;
      dateDePeremption: Date;
    },
  ): Promise<Produit> {
    const { frigoId, codebarre, quantite, dateDePeremption } = request;
    const ajouterProduitCommand = new AjouterProduitCommand();
    ajouterProduitCommand.codebarre = codebarre;
    ajouterProduitCommand.quantite = quantite;
    ajouterProduitCommand.dateDePeremption = dateDePeremption;
    ajouterProduitCommand.frigoId = frigoId;

    return await this.ajouterProduitUsecase.execute(ajouterProduitCommand);
  }

  @Put(':id')
  async updateProduit(
    @Param('id') produitId: number,
    @Body()
    request: {
      frigoId: number;
      quantite: number;
      dateDePeremption: Date;
    },
  ): Promise<Produit> {
    const { quantite, dateDePeremption } = request;
    const mettreAJourProduitCommand = new MettreAJourProduitCommand();
    mettreAJourProduitCommand.produitId = produitId;
    mettreAJourProduitCommand.quantite = quantite;
    mettreAJourProduitCommand.dateDePeremption = dateDePeremption;

    return await this.mettreAJourProduitUsecase.execute(
      mettreAJourProduitCommand,
    );
  }
}
