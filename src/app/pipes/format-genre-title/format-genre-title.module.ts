import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatGenreTitlePipe } from './format-genre-title.pipe';

@NgModule({
  declarations: [FormatGenreTitlePipe],
  imports: [
    CommonModule
  ],
  exports: [FormatGenreTitlePipe]
})
export class FormatGenreTitleModule { }
