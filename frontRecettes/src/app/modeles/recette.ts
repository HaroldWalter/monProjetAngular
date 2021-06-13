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

  printToBack(): Object {
    let materiel = [];
    for (let m of this.materiel) materiel.push(m.printToBack());

    let etapes = [];
    for (let e of this.etapes) etapes.push(e.printToBack());

    let ingredients = [];
    for (let i of this.ingredients) ingredients.push(i.printToBack());

    return {
      nom: this.nom,
      imageUrl: this.photo,
      indicateurs: {
        temps_preparation: this.indicateurs.tpsPreparation,
        temps_vaisselle: this.indicateurs.tpsVaisselle,
        temps_cuisson: this.indicateurs.tpsCuisson,
        difficulte: this.indicateurs.difficulte,
        nombre_personnes: this.indicateurs.nbPersonne,
        cout: this.indicateurs.cout,
      },
      materiels: materiel,
      favoris: this.recetteFavori,
      etapes: etapes,
      ingredients: ingredients,
      eleve_code: 'Harold',
    };
  }
}
