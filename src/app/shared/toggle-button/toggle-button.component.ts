import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';

import { IToggle } from './itoggle';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  toggle: InputSignal<IToggle> = input.required<IToggle>();

  protected m_toggleClick(): void {
    this.toggle().checked = !this.toggle().checked;
  }
}
