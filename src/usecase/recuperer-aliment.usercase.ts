import { Inject } from '@nestjs/common';
import { OpenfoodfactsRepository } from '../infrastructure/openfactfoods/openfoodfacts.repository';
import { AlimentRepository } from '../domain/frigo/aliment/aliment.repository.interface';
import { Aliment } from '../domain/frigo/aliment/aliment.model';
import { RecupererAlimentCommand } from './commands/recuperer-aliment.command';
import { OpenfoodfactsProduit } from '../infrastructure/openfactfoods/openfoodfacts-produit.model';

export class RecupererAlimentUsercase {
  constructor(
    private readonly openfoodfactsRepository: OpenfoodfactsRepository,
    @Inject('AlimentRepository')
    private readonly alimentRepository: AlimentRepository,
  ) {}

  async execute(
    recupererAlimentCommand: RecupererAlimentCommand,
  ): Promise<Aliment> {
    const { codebarre } = recupererAlimentCommand;

    let aliment = await this.alimentRepository.recupererAliment(codebarre);
    if (!aliment) {
      const openfactfoodsReponse = await this.openfoodfactsRepository
        .recupererProduit(codebarre)
        .toPromise();

      if (openfactfoodsReponse.data.status === 0) {
        throw Error('Produit non trouvé');
      }

      const openfactfoodsProduit = new OpenfoodfactsProduit(
        openfactfoodsReponse.data.code,
        openfactfoodsReponse.data.product,
      );

      aliment = openfactfoodsProduit.toAliment();
    }

    return aliment;
  }
}
