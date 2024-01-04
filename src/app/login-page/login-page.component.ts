import { Component } from '@angular/core';

import { EmailInputPageComponent } from './email-input-page/email-input-page.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [EmailInputPageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
