import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  onSubmit(){
    const user = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      mail: this.form.value.mail,
      password: this.form.value.password
    }
    this.apiService.createUser(JSON.stringify(user)).subscribe((response) => console.log(response));
    return this.router.navigate(['/login']);
  }
}
