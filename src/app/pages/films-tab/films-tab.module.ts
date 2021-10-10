import { SearchModule } from './../../components/search/search.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsTabPage } from './films-tab.page';
import { FilmTabPageRoutingModule } from './films-tab-routing.module';
import { FilmModule } from '../../components/film/film.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: FilmsTabPage }]),
    FilmTabPageRoutingModule,
    FilmModule,
    SearchModule,
  ],
  declarations: [FilmsTabPage]
})
export class FilmsTabPageModule {}
