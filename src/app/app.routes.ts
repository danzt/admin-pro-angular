import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NofoundpageComponent },

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
