import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected m_userDropdownActive: WritableSignal<boolean> = signal(false);

  protected m_onUserClick() {
    this.m_userDropdownActive.set(!this.m_userDropdownActive());
  }

  @Output() userClick: EventEmitter<void> = new EventEmitter<void>();

  protected m_settingsClick() {
    this.userClick.emit();
  }
}
