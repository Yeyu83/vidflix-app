import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  constructor(
    private http: HttpClient
  ) { }

  public getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${ environment.api }/genres`);
  }

}
