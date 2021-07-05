import { ProduitRepository } from '../domain/frigo/produit/produit.repository.interface';
import { AjouterProduitCommand } from './commands/ajouter-produit.command';
import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { Produit } from '../domain/frigo/produit/produit.model';
import { Inject } from '@nestjs/common';
import { OpenfoodfactsRepository } from '../infrastructure/openfactfoods/openfoodfacts.repository';
import { Aliment } from '../domain/frigo/aliment/aliment.model';
import { OpenfoodfactsProduit } from '../infrastructure/openfactfoods/openfoodfacts-produit.model';

export class AjouterProduitUsecase {
  constructor(
    @Inject('ProduitRepository')
    private readonly produitRepository: ProduitRepository,
    @Inject('FrigoRepository')
    private readonly frigoRepository: FrigoRepository,
    @Inject('OpenfoodfactsRepository')
    private readonly openfactfoodsRepository: OpenfoodfactsRepository,
  ) {}

  async execute(
    ajouterProduitCommand: AjouterProduitCommand,
  ): Promise<Produit> {
    const { frigoId, codebarre, dateDePeremption, quantite } =
      ajouterProduitCommand;

    const openfactfoodsReponse = await this.openfactfoodsRepository
      .recupererProduit(codebarre)
      .toPromise();

    const openfactfoodsProduit = new OpenfoodfactsProduit(
      openfactfoodsReponse.data.code,
      openfactfoodsReponse.data.product,
    );

    const aliment = openfactfoodsProduit.toAliment();

    const frigo = await this.frigoRepository.recupererFrigo(frigoId);

    return await this.produitRepository.ajouterProduit(
      frigo,
      aliment,
      quantite,
      dateDePeremption,
    );
  }
}
