import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  InputSignal,
  Output,
  WritableSignal,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-employment-type-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employment-type-option.component.html',
  styleUrl: './employment-type-option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentTypeOptionComponent {
  name: InputSignal<string> = input.required<string>();

  description: InputSignal<string> = input<string>('');

  iconSrc: InputSignal<string> = input.required<string>();

  protected m_active: WritableSignal<boolean> = signal(false);

  @Output() ChangeStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected m_changeActive(): void {
    const newStatus: boolean = !this.m_active();
    this.m_active.set(newStatus);

    this.ChangeStatus.emit(newStatus);
  }
}
