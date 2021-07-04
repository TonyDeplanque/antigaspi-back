import { FrigoRepository } from '../../domain/frigo/frigo.repository.interface';
import { Frigo } from '../../domain/frigo/frigo';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Produit } from '../../domain/frigo/produit/produit.model';

@Injectable()
export class FrigoPrismaRepository implements FrigoRepository {
  constructor(private readonly prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async recupererFrigo(id: number): Frigo {
    const frigo = await this.prisma.frigo.findUnique({
      where: { id: Number(id) },
      include: { produits: true },
    });

    frigo.produits;

    return {
      id: frigo.id,
      produits: frigo.produits as unknown as Produit[],
    } as Frigo;
  }

  creerFrigo(): Frigo {
    const frigo = this.prisma.frigo.create({
      data: {},
    });

    return frigo as unknown as Frigo;
  }
}
