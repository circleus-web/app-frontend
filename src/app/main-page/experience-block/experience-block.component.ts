import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

import { IExperienceDescription } from './iexperience-description';

@Component({
  selector: 'app-experience-block',
  standalone: true,
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent],
})
export class ExperienceBlockComponent {
  previousExperiences = input.required<IExperienceDescription[]>();

  size = input.required<string>();
}
