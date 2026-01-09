import { Routes } from '@angular/router';
import { AdminLayout } from './shared/layout/admin-layout/admin-layout';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'admin',
        component: AdminLayout,
        children: [
            { path: 'dashboard', loadComponent: () => import('./pages/admin/dashboard/dashboard').then(m => m.Dashboard) },
        ]
    },
];
