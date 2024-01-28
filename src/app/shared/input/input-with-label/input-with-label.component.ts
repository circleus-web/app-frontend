import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IInputWithLabel } from './iinput-with-label';

@Component({
  selector: 'app-input-with-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-with-label.component.html',
  styleUrl: './input-with-label.component.scss',
})
export class InputWithLabelComponent {
  @Input({ required: true }) inputWithLabel!: IInputWithLabel;

  protected get inputClass(): string[] {
    return [
      ...this.inputWithLabel.class,
      this.inputWithLabel.isInvalid ? 'error' : '',
    ];
  }
}
