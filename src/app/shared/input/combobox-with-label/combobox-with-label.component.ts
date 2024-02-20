import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IComboboxWithLabel } from './icombobox-with-label';

@Component({
  selector: 'app-combobox-with-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './combobox-with-label.component.html',
  styleUrl: './combobox-with-label.component.scss',
})
export class ComboboxWithLabelComponent {
  public comboboxWithLabel = input.required<IComboboxWithLabel>();
}
