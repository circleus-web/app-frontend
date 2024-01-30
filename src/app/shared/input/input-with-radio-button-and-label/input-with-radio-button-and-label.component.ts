import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IInputWithRadioButtonAndLabel } from './iinput-with-radio-button-and-label';

@Component({
  selector: 'app-input-with-radio-button-and-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-with-radio-button-and-label.component.html',
  styleUrl: './input-with-radio-button-and-label.component.scss',
})
export class InputWithRadioButtonAndLabelComponent {
  @Input() inputWithRadioButtonAndLabel!: IInputWithRadioButtonAndLabel;

  protected get inputClass(): string[] {
    return [
      ...this.inputWithRadioButtonAndLabel.class,
      this.inputWithRadioButtonAndLabel.isInvalid ? 'error' : '',
    ];
  }
}
