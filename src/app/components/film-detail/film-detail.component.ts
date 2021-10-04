import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { LinksService } from '../../services/links.service';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
  providers: [InAppBrowser],
})
export class FilmDetailComponent {
  @Input() film: Film;

  public links: any;

  constructor(
    private linksService: LinksService,
    public toastController: ToastController,
    private iab: InAppBrowser,
  ) { }

  ionViewWillEnter(): void {
    this.linksService.getLinks(this.film.id).subscribe((res: any) => {
      this.links = res;
    });
  }

  public openBrowser(url: string): void {
    const browser = this.iab.create(url, '_system');
  }
}
