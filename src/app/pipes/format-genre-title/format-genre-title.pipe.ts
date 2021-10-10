import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatGenreTitle'
})
export class FormatGenreTitlePipe implements PipeTransform {
  transform(genreKey: string, genres: any[]): any {
    return genres.find((genre) => String(genre.value) === genreKey)?.name;
  }
}
