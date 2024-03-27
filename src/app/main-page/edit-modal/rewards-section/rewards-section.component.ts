import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rewards-section',
  standalone: true,
  imports: [],
  templateUrl: './rewards-section.component.html',
  styleUrl: './rewards-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardsSectionComponent {}
