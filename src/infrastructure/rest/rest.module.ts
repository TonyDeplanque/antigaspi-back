import { Module } from '@nestjs/common';
import { ProduitController } from './produit/produit.controller';
import { FrigoController } from './frigo/frigo.controller';
import { FrigoPrismaRepository } from '../repositories/frigo.prisma.repository';
import { ProduitPrismaRepository } from '../repositories/produit.prisma.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProduitController, FrigoController],
  providers: [
    {
      provide: 'FrigoRepository',
      useClass: FrigoPrismaRepository,
    },
    {
      provide: 'ProduitRepository',
      useClass: ProduitPrismaRepository,
    },
    PrismaService,
  ],
})
export class RestModule {}
