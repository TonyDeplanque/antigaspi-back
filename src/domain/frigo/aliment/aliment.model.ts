import { AlimentException } from './aliment-exception.enum';

export class Aliment {
  nom: string;
  categorie: string;
  imageUrl: string;
  codebarre: string;
  marque: string;

  constructor(
    nom: string,
    categorie: string,
    imageUrl: string,
    codebarre: string,
    marque: string,
  ) {
    this.nom = nom;
    this.categorie = categorie;
    this.imageUrl = imageUrl;
    this.codebarre = codebarre;
    this.marque = marque;
    this.validate();
  }

  validate(): void {
    if (!this.nom) {
      throw Error(AlimentException.NomNotEmptyException);
    }

    if (!this.codebarre) {
      throw Error(AlimentException.CodeBarreNotEmptyException);
    }
  }
}
