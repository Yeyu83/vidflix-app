import { FormatGenreTitleModule } from './../../pipes/format-genre-title/format-genre-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormatGenreTitleModule,
    IonicModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
