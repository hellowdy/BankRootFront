import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;

  constructor(private apiService: ApiService) {}
  ngOnInit(){
   this.apiService.getProfile().subscribe((userData) => {
    this.apiService.getUserById(Object(userData)['sub']).subscribe((data) => {
      this.user = data;
      console.log(userData);
   }) 
  })   
  }
}