import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private apiService: ApiService) {}

  onSubmit(formData: FormData) {

    const nom = formData.nom;
    const prenom = formData.prenom;
    const email = formData.email;
    const password = formData.password;

    this.apiService.getApi().subscribe((data) => {
      console.log(data);
      
    })
  }
}
