import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recomendations-section',
  standalone: true,
  imports: [],
  templateUrl: './recomendations-section.component.html',
  styleUrl: './recomendations-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecomendationsSectionComponent {}
