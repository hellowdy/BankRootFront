import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  isLoggedIn = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) {}

  ngOnInit(): any {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      return this.router.navigateByUrl('/account');
    }
  }
  
  form = new FormGroup({
    mail: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

   onSubmit() { 
    const { mail, password } = this.form.value;
    this.authService.login( mail || '', password || '').subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.router.navigateByUrl('/account');       
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
