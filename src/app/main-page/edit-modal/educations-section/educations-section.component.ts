import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-educations-section',
  standalone: true,
  imports: [],
  templateUrl: './educations-section.component.html',
  styleUrl: './educations-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsSectionComponent {}
