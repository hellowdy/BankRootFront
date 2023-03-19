import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface LoginResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUsers() {
    return this.http.get("/user/20", this.httpOptions);
  }

  createUser(user: any) {
    return this.http.post("/auth/register", user, this.httpOptions)
  }
  
  login(formData: any){
    return this.http.post<LoginResponse>(`/login`, formData, this.httpOptions);
  }
}
