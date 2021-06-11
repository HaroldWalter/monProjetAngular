import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/modeles/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-details-recette',
  templateUrl: './details-recette.component.html',
  styleUrls: ['./details-recette.component.css']
})
export class DetailsRecetteComponent implements OnInit {
  
  public recetteAffichee : Recette | undefined;

  constructor(private activatedRoute: ActivatedRoute, private recetteService: RecetteService) { 
    let idParam = this.activatedRoute.snapshot.paramMap.get("id");

    if (idParam) {
      this.recetteAffichee = recetteService.getRecette(idParam);
     
      }
    
  }

  ngOnInit(): void {
    if(this.recetteAffichee!==undefined)
      console.log(this.recetteAffichee);
  }
  

}
