import { Etapes } from './etapes';
import { Indicateurs } from './indicateurs';
import { Ingredients } from './ingredients';
import { Materiel } from './materiel';

export class Recette {
  constructor(
    public id: string,
    public nom: string,
    public indicateurs: Indicateurs,
    public materiel: Materiel[],
    public ingredients: Ingredients[],
    public etapes: Etapes[],
    public recetteFavori: boolean,
    public photo: string
  ) {}
}
