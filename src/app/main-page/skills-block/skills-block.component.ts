import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-skills-block',
  standalone: true,
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class SkillsBlockComponent {
  @Input({ required: true }) skills!: string[];

  @Input({ required: true }) size!: string;
}
