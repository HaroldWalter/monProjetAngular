import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/modeles/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  
  public tabRecettesFavorites: Recette[];
  
  constructor(private monServiceRecette: RecetteService) {
    this.tabRecettesFavorites = this.monServiceRecette
      .getRecettes()
      .filter((x) => x.recetteFavori == true);
    
  }

  ngOnInit(): void {}
}
