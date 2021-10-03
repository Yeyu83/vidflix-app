import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  public films: Film[];

  @Input() set data(value: Film[]) {
    this.films = value;
  }
}
