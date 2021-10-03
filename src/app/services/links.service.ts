
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Link } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private http: HttpClient
  ) { }

  getLinks(filmId: number): Observable<Link[]> {
    return this.http.get<any>(`${ environment.api }/links/${ filmId }`);
  }
}
