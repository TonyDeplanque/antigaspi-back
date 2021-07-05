import { Aliment } from '../../domain/frigo/aliment/aliment.model';

export class OpenfoodfactsProduit {
  code: string;
  status: number;
  product: {
    product_name: string;
    image_front_url: string;
    categories: string;
    brands: string;
  };

  constructor(
    code: string,
    product: {
      product_name: string;
      image_front_url: string;
      categories: string;
      brands: string;
    },
  ) {
    this.code = code;
    this.product = product;
  }

  toAliment() {
    return new Aliment(
      this.product.product_name,
      this.product.categories,
      this.product.image_front_url,
      this.code,
      this.product.brands,
    );
  }
}
