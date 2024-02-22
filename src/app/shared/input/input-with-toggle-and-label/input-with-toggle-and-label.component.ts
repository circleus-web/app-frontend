import { CommonModule } from '@angular/common';
import { Component, Signal, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ToggleButtonComponent } from '../../toggle-button/toggle-button.component';
import { InputComponent } from '../input/input.component';

import { IInputWithToggleAndLabel } from './iinput-with-toggle-and-label';

@Component({
  selector: 'app-input-with-toggle-and-label',
  standalone: true,
  templateUrl: './input-with-toggle-and-label.component.html',
  styleUrl: './input-with-toggle-and-label.component.scss',
  imports: [CommonModule, ReactiveFormsModule, ToggleButtonComponent, InputComponent],
})
export class InputWithToggleAndLabelComponent {
  inputWithToggleAndLabel = input.required<IInputWithToggleAndLabel>();

  protected m_labelClass: Signal<string[]> = computed(() => this.inputWithToggleAndLabel().class);
}
