import { Component } from '@angular/core';

import { EmailInputComponent } from '../../shared/email-input/email-input.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [EmailInputComponent, ButtonComponent],
  templateUrl: './email-input-page.component.html',
  styleUrl: './email-input-page.component.scss',
})
export class EmailInputPageComponent {
  
  public continue() {
    console.log('continue');
    
  }
}
