import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailComponent } from './film-detail.component';

@NgModule({
  declarations: [FilmDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [FilmDetailComponent]
})
export class FilmDetailModule {
  @Input() detail: any;
}
