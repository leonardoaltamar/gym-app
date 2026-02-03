import { Routes } from '@angular/router';
import { AdminLayout } from './shared/layout/admin-layout/admin-layout';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/admin/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'customer',
        loadComponent: () => import('./pages/admin/customer/customer').then((m) => m.Customer),
      },
      {
        path: 'customer/create',
        loadComponent: () =>
          import('./pages/admin/customer/view/create-customer/create-customer').then(
            (m) => m.CreateCustomer
          ),
      },
      {
        path: 'trainer',
        loadComponent: () => import('./pages/admin/trainer/trainer').then((m) => m.Trainer),
      },
      {
        path: 'trainer/create',
        loadComponent: () =>
          import('./pages/admin/trainer/view/create-trainer/create-trainer').then(
            (m) => m.CreateTrainer
          ),
      },
    ],
  },
];
