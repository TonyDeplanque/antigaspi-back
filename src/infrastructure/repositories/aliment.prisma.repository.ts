import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AlimentRepository as AlimentRepositoryInterface } from '../../domain/frigo/aliment/aliment.repository.interface';
import { Aliment } from '../../domain/frigo/aliment/aliment.model';

@Injectable()
export class AlimentPrismaRepository implements AlimentRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async recupererAliment(codebarre: string): Promise<Aliment> {
    return await this.prisma.aliment.findUnique({
      where: { codebarre },
    });
  }
}
