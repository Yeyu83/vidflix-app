import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private page = 0;

  constructor(
    private http: HttpClient
  ) { }

  public resetPage(): void {
    this.page = 0;
  }

  public getArticles(): Observable<ArticlesResponse> {
    this.page += 1;
    return this.http
      .get<ArticlesResponse>(`${environment.apiUrl}/?country=us&page=${this.page}&apiKey=${environment.apiKey}`);
  }


  public getArticlesByCategory(category: string): Observable<ArticlesResponse> {
    this.page += 1;
    return this.http
      .get<ArticlesResponse>(`${environment.apiUrl}/?country=us&page=${this.page}&category=${category}&apiKey=${environment.apiKey}`);
  }
}
