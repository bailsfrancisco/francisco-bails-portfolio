import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Portfolio - Francisco Bails',
    loadComponent: () => import('./features/home/pages/home/home.component').then(h => h.HomeComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
