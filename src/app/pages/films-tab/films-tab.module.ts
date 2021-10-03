import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmsTabPage } from './films-tab.page';

import { FilmTabPageRoutingModule } from './films-tab-routing.module';
import { FilmsModule } from '../../components/films/films.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilmsTabPage }]),
    FilmTabPageRoutingModule,
    FilmsModule,
  ],
  declarations: [FilmsTabPage]
})
export class FilmsTabPageModule {}
