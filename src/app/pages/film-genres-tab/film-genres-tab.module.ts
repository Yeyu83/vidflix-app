import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmGenresTabPage } from './film-genres-tab.page';

import { FilmGenresTabPageRoutingModule } from './film-genres-tab-routing.module';
import { FilmsModule } from '../../components/films/films.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilmsModule,
    FilmGenresTabPageRoutingModule,
  ],
  declarations: [FilmGenresTabPage]
})
export class FilmGenresTabPageModule {}
