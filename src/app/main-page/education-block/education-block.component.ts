import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

import { IEducation } from './ieducation';

@Component({
  selector: 'app-education-block',
  standalone: true,
  templateUrl: './education-block.component.html',
  styleUrls: ['./education-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class EducationBlockComponent {
  educations = input.required<IEducation[]>();

  size = input.required<string>();
}
