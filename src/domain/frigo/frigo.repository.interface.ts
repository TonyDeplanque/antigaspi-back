import { Frigo } from './frigo';

export interface FrigoRepository {
  recupererFrigo(id: number): Promise<Frigo>;
  creerFrigo(): Promise<Frigo>;
}
