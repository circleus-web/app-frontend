import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  protected _m_is_toggled: boolean = false;

  protected m_toggleClick(): void {
    this.m_is_toggled = !this.m_is_toggled;
  }

  @Output() toggledEvent = new EventEmitter<boolean>();

  protected set m_is_toggled(value: boolean) {
    this._m_is_toggled = value;
    this.toggledEvent.emit(value);
  }

  protected get m_is_toggled(): boolean {
    return this._m_is_toggled;
  }
}
