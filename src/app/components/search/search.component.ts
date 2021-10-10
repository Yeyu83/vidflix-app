import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GenresService } from 'src/app/services/genres.service';
import { Genre } from '../../interfaces/genre.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public readonly years = ['1940','1950','1960','1970','1980','1990','2000','2010','2020'];

  public form: FormGroup;

  public genres: any[];

  constructor(
    private genresService: GenresService,
    private fb: FormBuilder,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.setForm();
  }

  public submitForm() {
    console.log(this.form.value);
  }

  public closeModal(): void {
    this.modalController.dismiss();
  }

  public search() {
    this.modalController.dismiss(this.form.value);
  }

  private setForm(): void {
    this.form = this.fb.group({
      title: [''], desde: [''], hasta: [''], genres: this.fb.group({}),
    });
    this.genresService.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
      this.genres.forEach((genre: Genre) => {
        (this.form.get('genres') as FormGroup).addControl(String(genre.value), new FormControl(false));
      });
    });
  }
}
