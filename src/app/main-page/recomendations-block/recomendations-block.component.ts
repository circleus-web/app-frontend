import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { IRecomendation } from './irecomendation';

@Component({
  selector: 'app-recomendations-block',
  standalone: true,
  templateUrl: './recomendations-block.component.html',
  styleUrls: [
    './recomendations-block.component.scss',
    '../main-page.component.scss',
  ],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class RecomendationsBlockComponent {
  @Input({ required: true }) recomendations!: IRecomendation[];

  @Input({ required: true }) size!: string;
}
