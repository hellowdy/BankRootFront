import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit() {
    const loginFormData = {
      email: this.email,
      password: this.password,
    };

    this.apiService.login(loginFormData).subscribe(
      (response: LoginResponse) => {
        console.log(response);
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/account']);
      },
      (error) => {
        console.log('Login failed', error);
      }
    );;
  }
}