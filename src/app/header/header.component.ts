import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';

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
}
