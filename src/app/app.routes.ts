import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { EmailInputPageComponent } from './login-page/email-input-page/email-input-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login - Circleus',
    component: LoginPageComponent,
    children: [
      { path: '', redirectTo: 'email-input', pathMatch: 'full' },
      { path: 'email-input', component: EmailInputPageComponent },
    ],
  },
];
