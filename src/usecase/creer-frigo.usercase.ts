import { FrigoRepository } from '../domain/frigo/frigo.repository.interface';
import { Frigo } from '../domain/frigo/frigo';

export class CreerFrigoUsercase {
  constructor(private readonly frigoRepository: FrigoRepository) {}

  execute(): Frigo {
    return this.frigoRepository.creerFrigo();
  }
}
