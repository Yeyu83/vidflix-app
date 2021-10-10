import { Component, ViewChild } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { RowsResponse } from '../../interfaces/rows.response.interface';
import { FilmsFilter } from 'src/app/classes/film-filters.class';
import { IonContent, IonInfiniteScroll, MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchComponent } from 'src/app/components/search/search.component';

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
    private readonly router: Router,
    private readonly filmsService: FilmsService,
    private menuController: MenuController,
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

  public navigateToFilmDetail(film: Film): void {
    this.router.navigate(['film-detail', film.id]);
  }

  public async showSearchModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchComponent,
    });
    modal.onDidDismiss().then(data => {
      if (data.data) {
        this.filters = data.data;
        this.restoreFilmsList();
        this.getFilms();
      }
    });
    return await modal.present();
  }

  public showMenu(): void {
    this.menuController.open('main-menu');
  }

  private restoreFilmsList(): void {
    this.films = [];
    this.page = 1;
    this.infiniteScroll.disabled = false;
  }
}
