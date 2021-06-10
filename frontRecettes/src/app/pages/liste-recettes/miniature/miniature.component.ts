import { Component, Input, OnInit } from '@angular/core';
import { Etapes } from 'src/app/modeles/etapes';
import { Indicateurs } from 'src/app/modeles/indicateurs';
import { Ingredients } from 'src/app/modeles/ingredients';
import { Materiel } from 'src/app/modeles/materiel';
import { Recette } from 'src/app/modeles/recette';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.css']
})
export class MiniatureComponent implements OnInit {

 @Input() public uneRecette!: Recette;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  inverserFavori() {
    this.uneRecette.recetteFavori = !this.uneRecette.recetteFavori;
  }


}
