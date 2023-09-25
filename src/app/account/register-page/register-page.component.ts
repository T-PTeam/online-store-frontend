import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{


  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      name: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {

    this.authService.register(this.form.value).subscribe(
      ()=> this.router.navigate(['/account']),
      error => console.error(error)    
    )
  }
}
