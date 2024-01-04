import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  // Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
})
export class EmailInputComponent {
  private email: string = '';

  private incorrectEmail(): (
    control: AbstractControl,
  ) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden =
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          control.value,
        );
      return forbidden ? { incorrectEmail: true } : null;
    };
  }

  public emailForm: FormControl = new FormControl(this.email, [
    // Validators.required,
    // Validators.email,
    this.incorrectEmail(),
  ]);
}
