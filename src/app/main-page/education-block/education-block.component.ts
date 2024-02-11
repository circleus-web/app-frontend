import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { IEducation } from './ieducation';

@Component({
  selector: 'app-education-block',
  standalone: true,
  templateUrl: './education-block.component.html',
  styleUrls: [
    './education-block.component.scss',
    '../main-page.component.scss',
  ],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class EducationBlockComponent {
  @Input({ required: true }) education!: IEducation[];

  @Input({ required: true }) size!: string;
}
