import { Frigo } from '../../domain/frigo/frigo';
import { Produit } from '../../domain/frigo/produit/produit.model';
import { ProduitRepository } from '../../domain/frigo/produit/produit.repository.interface';
import { Aliment } from '../../domain/frigo/aliment/aliment.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';
import { create } from 'domain';

@Injectable()
export class ProduitPrismaRepository implements ProduitRepository {
  constructor(private readonly prisma: PrismaService) {}

  async ajouterProduit(
    frigo: Frigo,
    aliment: Aliment,
    quantite: number,
    dateDePeremption: Date,
  ): Produit {
    const produit = await this.prisma.produit.create({
      data: {
        aliment: {
          connectOrCreate: {
            where: { codebarre: aliment.codebarre },
            create: { ...aliment },
          },
        },
        quantite,
        dateDePeremption,
        frigo: { connect: { id: frigo.id } },
      },
      include: {
        aliment: true,
      },
    });

    return produit as unknown as Produit;
  }

  mettreAJourProduit(
    produitId: number,
    quantite?: number,
    dateDePeremption?: Date,
  ): Produit {
    const produitDejaExistant = [].find((produit) => produit.id === produitId);

    if (produitDejaExistant) {
      if (quantite) {
        produitDejaExistant.quantite = quantite;
      }

      if (dateDePeremption) {
        produitDejaExistant.dateDePeremption = dateDePeremption;
      }
    }

    return produitDejaExistant;
  }
}
