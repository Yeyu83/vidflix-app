import { Component, ViewChild } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { RowsResponse } from '../../interfaces/rows.response.interface';
import { FilmsFilter } from 'src/app/classes/film-filters.class';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-films-tab',
  templateUrl: 'films-tab.page.html',
  styleUrls: ['films-tab.page.scss']
})
export class FilmsTabPage {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public films: Film[] = [];

  public filters = new FilmsFilter();

  private page = 1;

  constructor(
    private readonly filmsService: FilmsService
  ) { }

  ionViewWillEnter(): void {
    this.infiniteScroll.disabled = false;
    this.content.scrollToTop();
    this.getFilms();
  }

  public getFilms(): void {
    const filters = { ...this.filters, page: String(this.page) };
    this.filmsService.getFilmsByFilter(filters).subscribe((res: RowsResponse<Film>) => {
      this.infiniteScroll.complete();
      if (res.rows.length) {
        this.films = [...this.films, ...res.rows];
        this.page += 1;
      } else {
        this.infiniteScroll.disabled = true;
      }
    });
  }
}
