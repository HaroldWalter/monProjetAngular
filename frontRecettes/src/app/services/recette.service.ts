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
                r.materielsRecette,
                r.ingredientsRecette,
                r.etapesRecette,
                r.favoris,
                r.imageUrl
              )
            );
          }
        },
        (err) => {}
      );

    /*    this.tabRecettes = [
      new Recette(
        "78qds478s",
        'Tarte aux pommes',
        new Indicateurs(20, 3, 2, 2, 2, 1),
        [new Materiel('Moule', 1, true), new Materiel('Four', 1, true)],
        [
          new Ingredients('Pomme', 6, '', true),
          new Ingredients('Pate brisée', 1, '', true),
        ],
        [
          new Etapes(1, 'Couper les pommes', true),
          new Etapes(2, 'Couvrir la pate de morceaux de pommes', true),
          new Etapes(3, 'Mettre dans le four', true),
        ],
        true,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tarte_normande.jpg/800px-Tarte_normande.jpg'
      ),
      new Recette(
        "sd783wx45",
        'Tarte au chocolat',
        new Indicateurs(20, 3, 2, 2, 2, 1),
        [new Materiel('Moule', 1, true), new Materiel('Four', 1, true)],
        [
          new Ingredients('chocolat', 1, 'barre', true),
          new Ingredients('beurre', 50, "gr", true),
          new Ingredients('Pate brisée', 1, '', true),
        ],
        [
          new Etapes(1, 'Couper les pommes', true),
          new Etapes(2, 'Couvrir la pate de morceaux de pommes', true),
          new Etapes(3, 'Mettre dans le four', true),
        ],
        false,
        'https://cache.marieclaire.fr/data/photo/w1000_c17/mci/4j/tarte-chocolat.jpg'
      ),    
    ];

    setTimeout(() =>{
     this.tabRecettes.push(
       new Recette(
         "lmk83d71s",
        'Tarte aux pommes 2.0',
        new Indicateurs(20, 3, 2, 2, 2, 1),
        [new Materiel('Moule', 1, true), new Materiel('Four', 1, true)],
        [
          new Ingredients('Pomme', 6, '', true),
          new Ingredients('Pate brisée', 1, '', true),
        ],
        [
          new Etapes(1, 'Couper les pommes', true),
          new Etapes(2, 'Couvrir la pate de morceaux de pommes', true),
          new Etapes(3, 'Mettre dans le four', true),
        ],
        false,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tarte_normande.jpg/800px-Tarte_normande.jpg'
      ))
    }, 4000
    ) */
  }

  getRecettes() {
    return this.tabRecettes;
  }

  getRecette(identifiant: string): Recette | undefined {
    return this.tabRecettes.find((r) => r.id == identifiant);
  }
}
