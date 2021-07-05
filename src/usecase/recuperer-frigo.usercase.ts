import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { RecupererFrigoCommand } from './commands/recuperer-frigo.command';
import { Frigo } from '../domain/frigo/frigo';
import { Inject } from '@nestjs/common';

export class RecupererFrigoUsercase {
  constructor(
    @Inject('FrigoRepository')
    private readonly frigoRepository: FrigoRepository,
  ) {}

  async execute(recupererFrigo: RecupererFrigoCommand): Promise<Frigo> {
    const { id } = recupererFrigo;
    return await this.frigoRepository.recupererFrigo(id);
  }
}
