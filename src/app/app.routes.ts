import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageAccountCreationComponent } from './registration-page/account-creation/registration-page-account-creation.component';
import { FillAccountInfoComponent } from './registration-page/fill-account-info/fill-account-info.component';
import { GeneralInfoComponent } from './registration-page/fill-account-info/general-info/general-info.component';
import { JobInfoComponent } from './registration-page/fill-account-info/job-info/job-info.component';
import { MainPageComponent } from './main-page/main-page.component';

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
    children: [
      {
        path: '',
        redirectTo: 'account-creation',
        pathMatch: 'full',
      },
      {
        path: 'account-creation',
        title: 'Account Creation - Circleus',
        component: RegistrationPageAccountCreationComponent,
      },
      {
        path: 'fill-account-information',
        title: 'Fill Account Information - Circleus',
        component: FillAccountInfoComponent,
        children: [
          {
            path: '',
            redirectTo: 'general-information',
            pathMatch: 'full',
          },
          {
            path: 'general-information',
            title: 'Fill General Account Information - Circleus',
            component: GeneralInfoComponent,
          },
          {
            path: 'job-information',
            title: 'Fill Job Account Information - Circleus',
            component: JobInfoComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'main',
    title: 'Main Page - Circleus',
    component: MainPageComponent,
  },
];
