import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  WritableSignal,
  input,
  signal,
} from '@angular/core';

export interface IPossibility {
  amount: string[];
  percentRate: number;
}

@Component({
  selector: 'app-speciality-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speciality-item.component.html',
  styleUrl: './speciality-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialityItemComponent {
  name: InputSignal<string> = input.required<string>();

  mostPossible: InputSignal<string> = input.required<string>();

  topPossible: InputSignal<IPossibility[]> = input.required<IPossibility[]>();

  currency: InputSignal<string> = input.required<string>();

  protected m_active: WritableSignal<boolean> = signal(false);

  protected m_titleClick(): void {
    this.m_active.set(!this.m_active());
  }
}
