import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User, UserUp } from '../interfaces';

@Injectable()
export class AuthService {
  token: string | undefined;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    const url = 'https://example.com/api/login'; 
    return this.http.post<any>(url, user).pipe(
      tap((response: any) => {
        if (response.token) {
          const token = response.token;

          localStorage.setItem('key-token', token);
          this.setToken(token);
        }
      })
    );
  }

  register(userup: UserUp) :Observable<UserUp> {
    const url = 'https://example.com/api/register'; 
    return this.http.post<UserUp>(url, userup);
  }

  setToken(token: string){
    this.token = token;
  }
}
