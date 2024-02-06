import { Routes } from '@angular/router';

// https://angular.io/guide/standalone-components#routing-and-lazy-loading
export const routes: Routes = [
  {
    path: 'students',
    loadComponent: () =>
      import('./student-dashboard/student-dashboard.component').then(
        (mod) => mod.StudentDashboardComponent
      ),
  },

  //Wild Card Route for 404 request
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (mod) => mod.PageNotFoundComponent
      ),
  },
];
