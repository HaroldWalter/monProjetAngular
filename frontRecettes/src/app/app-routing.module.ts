import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsRecetteComponent } from './pages/details-recette/details-recette.component';
import { ListeRecettesComponent } from './pages/liste-recettes/liste-recettes.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'accueil', pathMatch: "full"} OU
  { path: 'accueil', component: AccueilComponent },
  { path: 'listeRecettes', component: ListeRecettesComponent },
  { path: 'detailsRecette/:id', component: DetailsRecetteComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
