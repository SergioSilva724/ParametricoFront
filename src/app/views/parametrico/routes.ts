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
      {
        path: 'pacempresarial',
        loadComponent: () => import('./pacempresarial/pacempresarial.component').then(m => m.PacempresarialComponent),
        data: {
          title: 'PAC Empresarial'
        }
      },
      {
        path: 'dictamencredito',
        loadComponent: () => import('./dictamencredito/dictamencredito.component').then(m => m.DictamencreditoComponent),
        data: {
          title: 'Dictamen de Credito'
        }
      },
      {
        path: 'eeff',
        loadComponent: () => import('./eeff/eeff.component').then(m => m.EeffComponent),
        data: {
          title: 'EEFF'
        }
      },
      {
        path: 'promedios',
        loadComponent: () => import('./promedios/promedios.component').then(m => m.PromediosComponent),
        data: {
          title: 'Promedios'
        }
      },
      {
        path: 'declaracionpatrimonial',
        loadComponent: () => import('./declaracionpatrimonial/declaracionpatrimonial.component').then(m => m.DeclaracionpatrimonialComponent),
        data: {
          title: 'Declaracion Patrimonial'
        }
      },
    ]
  }
];


