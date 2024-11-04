import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Parametrico'
    },
    children: [
      {
        path: '',
        redirectTo: 'Parametrico',
        pathMatch: 'full'
      },
      {
        path: 'valores',
        loadComponent: () => import('./valores/valores.component').then(m => m.ValoresComponent),
        data: {
          title: 'Valores'
        }
      },
      {
        path: 'cedula',
        loadComponent: () => import('./cedula/cedula.component').then(m => m.CedulaComponent),
        data: {
          title: 'Cedula'
        }
      },
    ]
  }
];


