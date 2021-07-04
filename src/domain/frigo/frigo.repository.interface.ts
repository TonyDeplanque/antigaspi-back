import { Frigo } from './frigo';

export interface FrigoRepository {
  recupererFrigo(id: number): Frigo;
  creerFrigo(): Frigo;
}
