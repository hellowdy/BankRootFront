import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface FormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private apiService: ApiService) {}

}
