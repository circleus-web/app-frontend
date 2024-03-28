import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageAccountCreationComponent } from './registration-page/account-creation/registration-page-account-creation.component';
import { FillAccountInfoComponent } from './registration-page/fill-account-info/fill-account-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login - Purples',
    component: LoginPageComponent,
  },
  {
    path: 'registration',
    title: 'Registration - Purples',
    children: [
      {
        path: '',
        redirectTo: 'account-creation',
        pathMatch: 'full',
      },
      {
        path: 'account-creation',
        title: 'Account Creation - Purples',
        component: RegistrationPageAccountCreationComponent,
      },
      {
        path: 'fill-account-information',
        title: 'Fill Account Information - Purples',
        component: FillAccountInfoComponent,
      },
    ],
  },
  {
    path: 'main',
    title: 'Main Page - Purples',
    component: MainPageComponent,
  },
];
