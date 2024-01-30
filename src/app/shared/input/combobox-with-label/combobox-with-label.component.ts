import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  @Input({ required: true }) public comboboxWithLabel!: IComboboxWithLabel;
}
