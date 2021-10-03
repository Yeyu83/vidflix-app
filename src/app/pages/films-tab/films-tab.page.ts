import { Component, ViewChild } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { RowsResponse } from '../../interfaces/rows.response.interface';
import { FilmsFilter } from 'src/app/classes/film-filters.class';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-films-tab',
  templateUrl: 'films-tab.page.html',
  styleUrls: ['films-tab.page.scss']
})
export class FilmsTabPage {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public films: Film[] = [];

  public filters = new FilmsFilter();

  constructor(
    private readonly filmsService: FilmsService
  ) { }

  ionViewWillEnter(): void {
    this.content.scrollToTop();
    this.getFilms();
  }

  public getFilms(): void {
    this.filmsService.getFilmsByFilter(this.filters).subscribe((res: RowsResponse<Film>) => {
      this.films = [...this.films, ...res.rows];
    });
  }
}
