import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  private user: any;

  constructor(
    private http: HttpClient
  ) { }

  public login(user: any): Observable<User> {
    const params = new HttpParams({ fromObject: user });
    return this.http.get<User>(`${ environment.api }/user/login`, { params });
  }

  public setUser(user: any): void {
    this.user = user;
  }

  public unsetUser(): void {
    this.user = null;
  }

  public getUser(): any {
    return this.user;
  }
}
