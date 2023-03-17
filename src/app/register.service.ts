import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface TokenResponse{
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http:HttpClient) { }
  signup(user:User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/auth/resgister', user)
      .pipe(
        tap((res: TokenResponse) => {
          localStorage.setItem('authToken', res.token);
        })
      )
  }
}
