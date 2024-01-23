import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login - Circleus',
    component: LoginPageComponent,
  },
  {
    path: 'registration',
    title: 'Registration - Circleus',
    component: RegistrationPageComponent,
  },
];
