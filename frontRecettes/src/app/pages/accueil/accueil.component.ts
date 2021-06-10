import { Component, OnInit } from '@angular/core';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public nombreDeRecette: number;

  constructor(private monServiceRecette : RecetteService) {
    this.nombreDeRecette = this.monServiceRecette.getRecette().length
   }

  ngOnInit(): void {
  }

}
