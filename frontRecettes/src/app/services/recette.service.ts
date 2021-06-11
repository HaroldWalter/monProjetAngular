import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etapes } from '../modeles/etapes';
import { Indicateurs } from '../modeles/indicateurs';
import { Ingredients } from '../modeles/ingredients';
import { Materiel } from '../modeles/materiel';
import { Recette } from '../modeles/recette';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private tabRecettes: Recette[] =[];

  constructor(private http: HttpClient) {
    this.http
      .get('https://api-recettes.herokuapp.com/recettes')
      .toPromise()
      .then(
        (data: any) => {
          for (let r of data) {
            let etapesRecette: Etapes[] = [];
            for (let e of r.etapes)
              etapesRecette.push(
                new Etapes(e.ordre, e.description, e.obligatoire)
              );

            let ingredientsRecette: Ingredients[] = [];
            for (let i of r.ingredients)
              ingredientsRecette.push(
                new Ingredients(i.nom, i.quantite, i.unite, i.obligatoire)
              );

            let materielsRecette: Materiel[] = [];
            for (let m of r.materiels)
              materielsRecette.push(
                new Materiel(m.nom, m.quantite, m.obligatoire)
              );

            this.tabRecettes.push(
              new Recette(
                r.id,
                r.nom,
                new Indicateurs(
                  r.indicateurs.temps_cuisson,
                  r.indicateurs.temps_preparation,
                  r.indicateurs.temps_vaiselle,
                  r.indicateurs.difficulte,
                  r.indicateurs.cout,
                  r.indicateurs.nombre_personnes
                ),
                materielsRecette,
                ingredientsRecette,
                etapesRecette,
                r.favoris,
                r.imageUrl
              )
            );
          }
        },
        (err) => {}
      );

    
  }

  getRecettes() {
    return this.tabRecettes;
  }

  getRecette(identifiant: string): Recette | undefined {
    return this.tabRecettes.find((r) => r.id == identifiant);
  }
}
