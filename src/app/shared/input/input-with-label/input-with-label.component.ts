import { CommonModule } from '@angular/common';
import { Component, Signal, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IInput } from '../input/iinput';
import { InputComponent } from '../input/input.component';

import { IInputWithLabel } from './iinput-with-label';

@Component({
  selector: 'app-input-with-label',
  standalone: true,
  templateUrl: './input-with-label.component.html',
  styleUrl: './input-with-label.component.scss',
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
})
export class InputWithLabelComponent {
  inputWithLabel = input.required<IInputWithLabel>();

  protected m_labelClass: Signal<string[]> = computed(() => this.inputWithLabel().class);

  protected m_input: Signal<IInput> = computed(() => this.inputWithLabel().input);
}
