import { Component, ViewChild } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { RowsResponse } from '../../interfaces/rows.response.interface';
import { FilmsFilter } from 'src/app/classes/film-filters.class';
import { IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { FilmDetailComponent } from '../../components/film-detail/film-detail.component';

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
    private readonly filmsService: FilmsService,
    public modalController: ModalController,
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

  public showFilmDetail(film: Film): void {
    this.filmsService.getFilmById(film.id).subscribe(async (res: Film[]) => {
      const modal = await this.modalController.create({
        component: FilmDetailComponent,
        swipeToClose: true,
        componentProps: { film: res[0] }
      });
      return await modal.present();
    });
  }
}
