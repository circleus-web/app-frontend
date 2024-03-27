import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {}
