import { RowsResponse } from './../interfaces/rows.response.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../interfaces/film.interface';
import { Filter } from '../interfaces/filter.interface';
import { TmdbFilm } from '../interfaces/tmdbFilm.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient
  ) { }

  public getFilmById(filmId: number): Observable<any> {
    return this.http.get<Film>(`${ environment.api }/films/film/id/${ filmId }`);
  }

  public getFilmByGenre(genre: number, page: number): Observable<RowsResponse<Film>> {
    const params = new HttpParams({
      fromObject: { genre: String(genre), page: String(page) }
    });
    return this.http.get<RowsResponse<Film>>(`${ environment.api }/films/genre`, { params });
  }

  public getFilmsByFilter(filter: Filter): Observable<RowsResponse<Film>> {
    const params = new HttpParams({
      fromObject: { ...filter, genres: JSON.stringify(filter.genres), page: String(filter.page) }
    });
    return this.http.get<RowsResponse<Film>>(`${ environment.api }/films/filter`, { params });
  }

  public getTmdbFilmByTitle(title: string): Observable<TmdbFilm[]> {
    const params = new HttpParams().set('title', title);
    return this.http.get<TmdbFilm[]>(`${ environment.api }/films/film`, { params });
  }
}
