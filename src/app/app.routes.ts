import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./feature/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./feature/register/register.component').then(m => m.RegisterComponent) },
  { path: 'products', loadComponent: () => import('./feature/productos-mas-vendidos/productos-mas-vendidos.component').then(m => m.ProductosMasVendidosComponent) },
  { path: '**', redirectTo: 'home' } // Redirige a 'home' si la ruta no existe
];

