import { Component } from '@angular/core';

import { EmailInputComponent } from '../../shared/email-input/email-input.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-login-page-email-verification-page',
  standalone: true,
  imports: [EmailInputComponent, ButtonComponent],
  templateUrl: './email-verification-page.component.html',
  styleUrl: './email-verification-page.component.scss',
})
export class EmailVerificationPageComponent {}
