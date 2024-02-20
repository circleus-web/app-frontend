import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { IProject } from './iproject';

@Component({
  selector: 'app-projects-block',
  standalone: true,
  templateUrl: './projects-block.component.html',
  styleUrls: ['./projects-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class ProjectsBlockComponent {
  projects = input.required<IProject[]>();

  size = input.required<string>();
}
