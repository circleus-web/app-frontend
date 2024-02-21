import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tool-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-button.component.html',
  styleUrl: './tool-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolButtonComponent {
  protected m_active: boolean = false;

  protected m_toggle(): void {
    this.m_active = !this.m_active;
  }
}
