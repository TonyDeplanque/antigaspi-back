import { HttpService, Injectable } from '@nestjs/common';
import { OpenfoodfactsProduit } from './openfoodfacts-produit.model';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class OpenfoodfactsRepository {
  private readonly baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';

  constructor(private readonly httpService: HttpService) {}

  recupererProduit(
    codebarre: string,
  ): Observable<AxiosResponse<OpenfoodfactsProduit>> {
    return this.httpService.get(this.baseUrl + codebarre + '.json');
  }
}
