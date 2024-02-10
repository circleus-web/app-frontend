import { Component, Input } from '@angular/core';

import { IExperienceDescription } from './iexperience-description';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-experience-block',
  standalone: true,
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss', '../main-page.component.scss'],
  imports: [CvBlockAppearenceComponent],
})
export class ExperienceBlockComponent {
  @Input({ required: true }) previousExperiences!: IExperienceDescription[];
}
