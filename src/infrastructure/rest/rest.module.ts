import { HttpService, Module } from '@nestjs/common';
import { ProduitController } from './produit/produit.controller';
import { FrigoController } from './frigo/frigo.controller';
import { FrigoPrismaRepository } from '../repositories/frigo.prisma.repository';
import { ProduitPrismaRepository } from '../repositories/produit.prisma.repository';
import { PrismaService } from '../prisma/prisma.service';
import { AjouterProduitUsecase } from '../../usecase/ajouter-produit.usecase';
import { RecupererFrigoUsercase } from '../../usecase/recuperer-frigo.usercase';
import { CreerFrigoUsercase } from '../../usecase/creer-frigo.usercase';
import { MettreAJourProduitUsecase } from '../../usecase/mettre-a-jour-produit.usecase';
import { OpenfoodfactsRepository } from '../openfactfoods/openfoodfacts.repository';
import Axios from 'axios';
import { AXIOS_INSTANCE_TOKEN } from '@nestjs/common/http/http.constants';
import { AlimentController } from './aliment/aliment.controller';
import { AlimentPrismaRepository } from '../repositories/aliment.prisma.repository';
import { RecupererAlimentUsercase } from '../../usecase/recuperer-aliment.usercase';
@Module({
  controllers: [ProduitController, FrigoController, AlimentController],
  providers: [
    {
      provide: 'FrigoRepository',
      useClass: FrigoPrismaRepository,
    },
    {
      provide: 'ProduitRepository',
      useClass: ProduitPrismaRepository,
    },
    {
      provide: 'AlimentRepository',
      useClass: AlimentPrismaRepository,
    },
    PrismaService,
    OpenfoodfactsRepository,
    AjouterProduitUsecase,
    RecupererFrigoUsercase,
    CreerFrigoUsercase,
    MettreAJourProduitUsecase,
    RecupererAlimentUsercase,
    HttpService,
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: Axios,
    },
  ],
})
export class RestModule {}
