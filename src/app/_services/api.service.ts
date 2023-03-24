import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// interface LoginResponse {
//   token: string;
// }
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getUsers() {
    return this.httpClient.get("/user", this.httpOptions);
  }

  createUser(user: any) {
    return this.httpClient.post("/auth/register", user, this.httpOptions)
  }

  getUserById(id: number) {
    return this.httpClient.get(`/user/${id}`, this.httpOptions);
  }

  getProfile(){
    return this.httpClient.get("/user/find/profile", this.httpOptions);
  }
  
  // login(formData: any){
  //   return this.http.post(`/login`, user, this.httpOptions);
  // }
}
