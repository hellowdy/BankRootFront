import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly jwtToken = 'Token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
 

  constructor(private http: HttpClient) { }

  login(mail: string, password: string){
    return this.http.post('/auth/login', { mail, password }, 
    httpOptions
    );
  }

  getToken(){
    return window.sessionStorage.getItem(this.jwtToken);
  }

  logout(){
   sessionStorage.removeItem(this.jwtToken);
   this.isAuthenticatedSubject.next(false);
  }

}
