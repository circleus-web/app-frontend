import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IInputWithCheckboxAndLabel } from './iinput-with-checkbox-and-label';

@Component({
  selector: 'app-input-with-checkbox-and-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-with-checkbox-and-label.component.html',
  styleUrl: './input-with-checkbox-and-label.component.scss',
})
export class InputWithCheckboxAndLabelComponent {
  @Input({ required: true })
    inputWithCheckboxAndLabel!: IInputWithCheckboxAndLabel;

  protected get inputClass(): string[] {
    return [
      ...this.inputWithCheckboxAndLabel.class,
      this.inputWithCheckboxAndLabel.isInvalid ? 'error' : '',
    ];
  }
}
