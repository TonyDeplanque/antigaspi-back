import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { Frigo } from '../domain/frigo/frigo';
import { Inject } from '@nestjs/common';

export class CreerFrigoUsercase {
  constructor(
    @Inject('FrigoRepository')
    private readonly frigoRepository: FrigoRepository,
  ) {}

  async execute(): Promise<Frigo> {
    return await this.frigoRepository.creerFrigo();
  }
}
