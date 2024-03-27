import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {}
