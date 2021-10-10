import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { LinksService } from '../../services/links.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
  providers: [InAppBrowser],
})
export class FilmDetailPage {
  public film: Film;

  public links: any;

  constructor(
    private linksService: LinksService,
    private filmsService: FilmsService,
    private iab: InAppBrowser,
    private route: ActivatedRoute,
  ) { }

  ionViewWillEnter(): void {
    const filmId = Number(this.route.snapshot.paramMap.get('filmId'));
    this.filmsService.getFilmById(filmId).subscribe((film: Film[]) => {
      this.film = film.shift();
      this.linksService.getLinks(this.film.id).subscribe((res: any) => {
        this.links = res;
      });
    });
  }

  public openBrowser(url: string): void {
    const browser = this.iab.create(url, '_system');
  }
}
