import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListeRecettesComponent } from './pages/liste-recettes/liste-recettes.component';
import { DetailsRecetteComponent } from './pages/details-recette/details-recette.component';
import { MenuComponent } from './menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MiniatureComponent } from './pages/liste-recettes/miniature/miniature.component';
import { SlideComponent } from './pages/accueil/slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeRecettesComponent,
    DetailsRecetteComponent,
    MenuComponent,
    MiniatureComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
