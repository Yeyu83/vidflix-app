import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmGenresTabPage } from './film-genres-tab.page';
import { FilmGenresTabPageRoutingModule } from './film-genres-tab-routing.module';
import { FilmModule } from '../../components/film/film.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilmModule,
    FilmGenresTabPageRoutingModule,
  ],
  declarations: [FilmGenresTabPage]
})
export class FilmGenresTabPageModule {}
