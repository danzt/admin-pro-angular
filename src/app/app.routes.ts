import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';


const appRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'graficas1', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NofoundpageComponent },

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
