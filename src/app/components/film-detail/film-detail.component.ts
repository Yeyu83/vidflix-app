import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { LinksService } from '../../services/links.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
})
export class FilmDetailComponent {
  @Input() film: Film;

  public links: any;

  constructor(
    private linksService: LinksService
  ) { }

  ionViewWillEnter(): void {
    this.linksService.getLinks(this.film.id).subscribe((res: any) => {
      this.links = res;
    });
  }
}
