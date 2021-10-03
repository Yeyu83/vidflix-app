import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmModule } from '../film/film.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmModule,
  ],
  exports: [FilmsComponent]
})
export class FilmsModule { }
