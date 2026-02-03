import { Customer } from '@/core/models';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardDatePickerComponent } from '@/shared/components/date-picker/date-picker.component';
import { ZardFormImports } from '@/shared/components/form/form.imports';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { ZardSelectItemComponent } from '@/shared/components/select/select-item.component';
import { ZardSelectComponent } from '@/shared/components/select/select.component';
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

interface CustomerForm {
  documentType: FormControl<string | null>;
  documentNumber: FormControl<string | null>;
  firstName: FormControl<string | null>;
  secondName: FormControl<string | null>;
  lastname: FormControl<string | null>;
  secondLastname: FormControl<string | null>;
  gender: FormControl<string | null>;
  expeditionDate: FormControl<string | null>;
  birthDate: FormControl<string | null>;
  stature: FormControl<string | null>;
  weight: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
}

@Component({
  selector: 'app-create-customer',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ZardFormImports,
    ZardInputDirective,
    ZardCardComponent,
    ZardButtonComponent,
    ZardDatePickerComponent,
    ZardSelectComponent,
    ZardSelectItemComponent,
  ],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css',
})
export class CreateCustomer {
  form: FormGroup<CustomerForm> = new FormGroup<CustomerForm>({
    documentType: new FormControl<string | null>('', [Validators.required]),
    documentNumber: new FormControl<string | null>('', [Validators.required]),
    firstName: new FormControl<string | null>('', [Validators.required]),
    secondName: new FormControl<string | null>(''),
    lastname: new FormControl<string | null>('', [Validators.required]),
    secondLastname: new FormControl<string | null>(''),
    gender: new FormControl<string | null>('', [Validators.required]),
    expeditionDate: new FormControl<string | null>('', [Validators.required]),
    birthDate: new FormControl<string | null>('', [Validators.required]),
    stature: new FormControl<string | null>('', [Validators.required]),
    weight: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl<string | null>('', [Validators.required]),
  });
  constructor(private router: Router) { }

  handleSubmit() {
    if (!this.form.invalid) {
      console.log('Crear cliente');

      /* create customer logic here */
      this.createCustomer();
      this.router.navigate(['/admin/customer']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  createCustomer() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const customerModel: Customer = this.form.getRawValue() as Customer;

    console.log(customerModel);
  }
}
