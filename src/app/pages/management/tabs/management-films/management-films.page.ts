import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
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
    private alertController: AlertController,
    private toastController: ToastController,
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

  public async showSaveFilmAlert(film: TmdbFilm): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Cerar sesión',
      message: `¿Está seguro que desea añadir ${ film.title } a Vidflix?`,
      buttons: [
        {
          text: 'Guardar',
          handler: () => this.saveTmdbFilm(film),
        },
        { text: 'Cancelar' }
      ]
    });
    await alert.present();
  }

  public saveTmdbFilm(film: TmdbFilm): void {
    this.filmsService.saveTmdbFilm(film).subscribe((res: any) => {
      const message = res.error
        ? 'No se ha podido guardar la película'
        : 'La película se ha guardado correctamente';
      this.showToast(message);
    });
  }

  private async showToast(message: string): Promise<void> {
    await (await this.toastController.create({ message, duration: 2000 })).present();
  }
}
