import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  protected m_is_toggled = false;

  protected m_toggleClick(): void {
    this.m_is_toggled = !this.m_is_toggled;
  }
}
