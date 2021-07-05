import { Aliment } from './aliment.model';

export interface AlimentRepository {
  recupererAliment(codebarre: string): Promise<Aliment>;
}
