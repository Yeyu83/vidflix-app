import { RowsResponse } from './../../interfaces/rows.response.interface';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonContent, IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { GenresService } from '../../services/genres.service';
import { Genre } from 'src/app/interfaces/genre.interface';

@Component({
  selector: 'app-film-genres-tab',
  templateUrl: 'film-genres-tab.page.html',
  styleUrls: ['film-genres-tab.page.scss']
})
export class FilmGenresTabPage implements AfterViewInit {
  @ViewChild(IonSegment) segment: IonSegment;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public films: Film[] = [];

  public genres: Genre[] = [];

  private page = 1;

  private selectedGenre: string;

  constructor(
    private readonly filmsService: FilmsService,
    private readonly genresService: GenresService,
  ) { }

  ionViewWillEnter(): void {
    this.genresService.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
      this.selectedGenre = this.genres[0].name;
      this.content.scrollToTop();
      this.getFilmsByGenre();
    });
  }

  ngAfterViewInit() {
    this.segment.value = this.selectedGenre;
  }

  public getFilmsByGenre(): void {
    const selectedGenreValue = this.genres.find(genre => genre.name === this.selectedGenre).value;
    this.filmsService.getFilmByGenre(selectedGenreValue, this.page).subscribe((res: RowsResponse<Film>) => {
      this.infiniteScroll.complete();
      if (res.rows.length) {
        this.films = [...this.films, ...res.rows];
        this.page += 1;
      } else {
        this.infiniteScroll.disabled = true;
      }
    });
  }

  public resetView(evt: CustomEvent): void {
    this.infiniteScroll.disabled = false;
    this.page = 1;
    this.films = [];
    this.selectedGenre = evt.detail.value;
    this.content.scrollToTop();
    this.getFilmsByGenre();
  }
}
