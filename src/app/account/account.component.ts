import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
      this.apiService.getUsers().subscribe((data) => {
        this.user = data;
        console.log(data); 
      })
  }
}