import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit() {}

}
