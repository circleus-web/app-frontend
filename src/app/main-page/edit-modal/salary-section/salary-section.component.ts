import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-salary-section',
  standalone: true,
  imports: [],
  templateUrl: './salary-section.component.html',
  styleUrl: './salary-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalarySectionComponent {}
