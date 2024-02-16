import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IExperienceDescription } from './iexperience-description';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
@Component({
  selector: 'app-experience-block',
  standalone: true,
  templateUrl: './experience-block.component.html',
  styleUrls: [
    './experience-block.component.scss',
    '../main-page.component.scss',
  ],
  imports: [CommonModule, CvBlockAppearenceComponent],
})
export class ExperienceBlockComponent {
  @Input({ required: true }) previousExperiences!: IExperienceDescription[];

  @Input({ required: true }) size!: string;
}
