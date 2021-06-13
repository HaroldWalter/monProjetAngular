import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etapes } from '../modeles/etapes';
import { GenericHttpResponse } from '../modeles/generic-http-response';
import { Indicateurs } from '../modeles/indicateurs';
import { Ingredients } from '../modeles/ingredients';
import { Materiel } from '../modeles/materiel';
import { Recette } from '../modeles/recette';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private tabRecettes: Recette[] = [];

  private API_URL = 'https://api-recettes.herokuapp.com/recettes';

  constructor(private http: HttpClient) {
    this.http
      .get(this.API_URL)
      .toPromise()
      .then(
        (data: any) => {
          this.tabRecettes.length = 0;
          for (let r of data) this.tabRecettes.push(this.construireRecette(r))
        
        },
        (err) => {
          this.tabRecettes.length = 0; //on vide le tableau
        }
      );
  }

  getRecettes() {
    return this.tabRecettes;
  }

  getRecette(identifiant: string): Recette | undefined {
    return this.tabRecettes.find((r) => r.id == identifiant);
  }

inverserRecetteFavorite(r :Recette) :
Promise<GenericHttpResponse<Recette>> {
  let recetteAMaj = r.printToBack() as any;
    recetteAMaj.favoris = !recetteAMaj.favoris;
    return this.http.put(this.API_URL + "/" + r.id, recetteAMaj).toPromise().then(
      (data:any) => {
        let recetteTab = this.tabRecettes.find(rt => rt.id === r.id);
        if (recetteTab) recetteTab.recetteFavori = recetteAMaj.favoris;
        return { statut: "OK", data : recetteTab};
      },
      err => {
        return { statut: "KO"};
      }
    )
}


  private construireRecette(r: any): Recette {
    let etapesRecette: Etapes[] = [];
    for (let e of r.etapes)
      etapesRecette.push(new Etapes(e.ordre, e.description, e.obligatoire));

    let ingredientsRecette: Ingredients[] = [];
    for (let i of r.ingredients)
      ingredientsRecette.push(
        new Ingredients(i.nom, i.quantite, i.unite, i.obligatoire)
      );

    let materielsRecette: Materiel[] = [];
    for (let m of r.materiels)
      materielsRecette.push(new Materiel(m.nom, m.quantite, m.obligatoire));

    return new Recette(
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
    );
  }
}
