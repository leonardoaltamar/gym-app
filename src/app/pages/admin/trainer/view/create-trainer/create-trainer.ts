import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardFormImports } from '@/shared/components/form/form.imports';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trainer',
  imports: [
        FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ZardFormImports,
    ZardInputDirective,
    ZardCardComponent,
    ZardButtonComponent,
  ],
  templateUrl: './create-trainer.html',
  styleUrl: './create-trainer.css',
})
export class CreateTrainer {
  form = new FormGroup({
    documentType: new FormControl<string>('', [Validators.required]),
    documentNumber: new FormControl<string>('', [Validators.required]),
    firstName: new FormControl<string>('', [Validators.required]),
    secondName: new FormControl<string>(''),
    lastname: new FormControl<string>('', [Validators.required]),
    secondLastname: new FormControl<string>(''),
    gender: new FormControl<string>('', [Validators.required]),
    expeditionDate: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl<string>('', [Validators.required]),
    stature: new FormControl<string>('', [Validators.required]),
    weight: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl<string>('', [Validators.required]),
  });
  constructor(private router: Router) {}

  createCustomer() {
    // Lógica para crear un nuevo cliente
    if(!this.form.invalid){
      console.log('Crear cliente');
      this.router.navigate(['/admin/customer']);
    }else {
      this.form.markAllAsTouched();
    }
  }
}
