import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

import { IAcievement } from './iacievement';

@Component({
  selector: 'app-achievements-block',
  standalone: true,
  templateUrl: './achievements-block.component.html',
  styleUrls: ['./achievements-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, BadgeComponent, CvBlockAppearenceComponent],
})
export class AchievementsBlockComponent {
  achievements = input.required<IAcievement[]>();

  size = input.required<string>();
}
