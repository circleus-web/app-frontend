import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {}
