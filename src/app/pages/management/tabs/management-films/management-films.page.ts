import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FilmsService } from '../../../../services/films.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmdbFilm } from '../../../../interfaces/tmdbFilm.interface';

@Component({
  selector: 'app-management-films',
  templateUrl: './management-films.page.html',
  styleUrls: ['./management-films.page.scss'],
})
export class ManagementFilmsPage implements OnInit {
  form: FormGroup;

  films: TmdbFilm[] = [];

  constructor(
    private menuController: MenuController,
    private filmsService: FilmsService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  public showMenu(): void {
    this.menuController.open('main-menu');
  }

  public search(): void {
    this.filmsService.getTmdbFilmByTitle(this.form.get('title').value)
      .subscribe((films: TmdbFilm[]) => {
        this.films = films;
      });
  }

  public addFilm(film: TmdbFilm): void {
    console.log(film);
  }
}
