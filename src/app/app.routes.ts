import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login - Circleus',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    title: 'Register - Circleus',
    component: RegisterPageComponent,
  },
];
