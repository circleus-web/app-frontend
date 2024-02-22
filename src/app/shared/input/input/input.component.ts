import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, InputSignal, Signal, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IInput } from './iinput';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  inputContent: InputSignal<IInput> = input.required<IInput>();

  inputClass: Signal<string[]> = computed(() => [...this.inputContent().class, this.inputContent().icon ? 'with-icon' : '']);
}
