import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ToggleButtonComponent } from '../../toggle-button/toggle-button.component';

import { IInputWithToggleAndLabel } from './iinput-with-toggle-and-label';

@Component({
  selector: 'app-input-with-toggle-and-label',
  standalone: true,
  templateUrl: './input-with-toggle-and-label.component.html',
  styleUrl: './input-with-toggle-and-label.component.scss',
  imports: [CommonModule, ReactiveFormsModule, ToggleButtonComponent],
})
export class InputWithToggleAndLabelComponent {
  inputWithToggleAndLabel = input.required<IInputWithToggleAndLabel>();

  protected get inputClass(): string[] {
    return [
      ...this.inputWithToggleAndLabel().class,
      this.inputWithToggleAndLabel().isInvalid ? 'error' : '',
    ];
  }

  protected toggle(value: boolean) {
    const newValue = this.inputWithToggleAndLabel().isInversed
      ? value !== this.inputWithToggleAndLabel().isInversed
      : value;
    this.inputWithToggleAndLabel().toggleChecked = newValue;
  }
}
