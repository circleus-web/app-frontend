import { Component, Input } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { IAcievement } from './iacievement';

@Component({
  selector: 'app-achievements-block',
  standalone: true,
  templateUrl: './achievements-block.component.html',
  styleUrls: [
    './achievements-block.component.scss',
    '../main-page.component.scss',
  ],
  imports: [BadgeComponent, CvBlockAppearenceComponent],
})
export class AchievementsBlockComponent {
  @Input({ required: true }) achievements!: IAcievement[];
}
