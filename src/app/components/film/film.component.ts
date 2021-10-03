import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
  @Input() film: Film;

  @Output() sendSelectedFilm = new EventEmitter<Film>();
}
