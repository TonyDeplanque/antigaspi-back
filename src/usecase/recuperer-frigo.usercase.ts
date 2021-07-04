import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { RecupererFrigoCommand } from './commands/recuperer-frigo.command';
import { Frigo } from '../domain/frigo/frigo';

export class RecupererFrigoUsercase {
  constructor(private readonly frigoRepository: FrigoRepository) {}

  execute(recupererFrigo: RecupererFrigoCommand): Frigo {
    const { id } = recupererFrigo;
    return this.frigoRepository.recupererFrigo(id);
  }
}
