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

  onSubmit(formData: FormData) {
    const email = formData.email;
    const password = formData.password;

    // Appel de l'API pour enregistrer les données dans la base de données
    this.apiService.getApi().subscribe((data) => {
      console.log(data);
      // Si l'inscription a réussi, on connecte l'utilisateur automatiquement
      this.apiService.getApi().subscribe((data) => {
        console.log(data);
        // Faire quelque chose après la connexion réussie, par exemple rediriger l'utilisateur vers une autre page
        this.router.navigate(['/account']);
      });
    });
  }
}
