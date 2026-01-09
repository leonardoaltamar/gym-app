import { Component } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ZardCardComponent, ZardButtonComponent, ZardInputDirective, ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private router: Router) {

  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/admin/dashboard']);
  }
}
