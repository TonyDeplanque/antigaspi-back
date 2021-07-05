import { Frigo } from '../../domain/frigo/frigo';
import { Produit } from '../../domain/frigo/produit/produit.model';
import { ProduitRepository } from '../../domain/frigo/produit/produit.repository.interface';
import { Aliment } from '../../domain/frigo/aliment/aliment.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProduitPrismaRepository implements ProduitRepository {
  constructor(private readonly prisma: PrismaService) {}

  async ajouterProduit(
    frigo: Frigo,
    aliment: Aliment,
    quantite: number,
    dateDePeremption: Date,
  ): Promise<Produit> {
    return await this.prisma.produit.create({
      data: {
        aliment: {
          connectOrCreate: {
            where: { codebarre: aliment.codebarre },
            create: { ...aliment },
          },
        },
        quantite,
        dateDePeremption: new Date(dateDePeremption),
        frigo: { connect: { id: frigo.id } },
      },
      include: {
        aliment: true,
        frigo: true,
      },
    });
  }

  async mettreAJourProduit(
    produitId: number,
    quantite?: number,
    dateDePeremption?: Date,
  ): Promise<Produit> {
    const data = {} as any;
    if (quantite) {
      data.quantite = quantite;
    }

    if (dateDePeremption) {
      data.dateDePeremption = new Date(dateDePeremption);
    }

    return await this.prisma.produit.update({
      where: { id: Number(produitId) },
      data,
      include: {
        aliment: true,
        frigo: true,
      },
    });
  }
}
