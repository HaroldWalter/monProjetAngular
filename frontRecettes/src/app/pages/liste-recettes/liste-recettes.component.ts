import { Component, OnInit } from '@angular/core';
import { Etapes } from 'src/app/modeles/etapes';
import { Indicateurs } from 'src/app/modeles/indicateurs';
import { Ingredients } from 'src/app/modeles/ingredients';
import { Materiel } from 'src/app/modeles/materiel';
import { Recette } from 'src/app/modeles/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css'],
})
export class ListeRecettesComponent implements OnInit {
 
  public tabRecettes :Recette[];
  constructor(private monServiceRecette : RecetteService) {
    this.tabRecettes=this.monServiceRecette.getRecette();
  }

  ngOnInit(): void {}

}
