import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardTableComponent } from '@/shared/components/table/table.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer',
  imports: [ZardButtonComponent, FontAwesomeModule, ZardCardComponent, ZardTableComponent],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

  constructor( private router: Router ){

  }

  faPlus = faPlus;
    listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  redirectCreateCustomer() {
    // Lógica para redirigir a la página de creación de cliente
    this.router.navigate(['/admin/customer/create']);    
  }
}
