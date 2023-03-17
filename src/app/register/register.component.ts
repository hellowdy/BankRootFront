import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private registerService: RegisterService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const user: User = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password
    };
    this.registerService.signup(user).subscribe();
    console.log(user)
  }
}
