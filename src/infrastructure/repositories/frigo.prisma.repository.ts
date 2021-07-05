import { FrigoRepository } from '../../domain/frigo/frigo.repository.interface';
import { Frigo } from '../../domain/frigo/frigo';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FrigoPrismaRepository implements FrigoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async recupererFrigo(id: number): Promise<Frigo> {
    return await this.prisma.frigo.findUnique({
      where: { id: Number(id) },
      include: { produits: { include: { aliment: true } } },
    });
  }

  async creerFrigo(): Promise<Frigo> {
    return await this.prisma.frigo.create({
      data: {},
      include: { produits: { include: { aliment: true } } },
    });
  }
}
