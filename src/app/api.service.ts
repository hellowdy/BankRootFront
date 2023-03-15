import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl = "http://152.228.163.78:3000/api"
  constructor(private http: HttpClient) { }
  getApi() {
    return this.http.get(this.apiUrl);
  }
}
