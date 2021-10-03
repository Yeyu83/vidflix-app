export class FilmsFilter {
  title: string;
  desde: string;
  hasta: string;
  genres: any[];
  page: string;
  constructor() {
    this.title = '';
    this.desde = '';
    this.hasta = '';
    this.genres = [];
    this.page = '1';
  }
}
