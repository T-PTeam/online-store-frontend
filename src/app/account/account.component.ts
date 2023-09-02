import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  onSubmit() {
    const { username, password } = this.formData;

    this.authService.login(username, password).subscribe(
      (response) => {
        console.log('Server Response:', response);

        //const token = response.token;

        //localStorage.setItem('token', token);
      },
      (error) => {
        console.error('Error:', error);

         this.formData.username = '';
         this.formData.password = '';
      }
    );
  }
}
