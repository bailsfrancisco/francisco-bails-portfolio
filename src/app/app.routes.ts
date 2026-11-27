import { Routes } from '@angular/router';

const homeRoute = {
  title: 'Francisco Bails',
  loadComponent: () =>
    import('./features/home/pages/home/home.component')
      .then(h => h.HomeComponent)
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en'
  },
  {
    path: 'es',
    ...homeRoute
  },
  {
    path: 'en',
    ...homeRoute
  },
  {
    path: '**',
    redirectTo: 'en'
  }
];
