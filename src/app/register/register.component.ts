import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private apiService: ApiService) {}

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  onSubmit(){
    const user = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      mail: this.form.value.email,
      password: this.form.value.password
    }
    this.apiService.createUser(JSON.stringify(user)).subscribe((response) => console.log(response));
  }
}
