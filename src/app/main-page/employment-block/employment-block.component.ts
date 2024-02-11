import { Component, Input, OnInit } from '@angular/core';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';

interface IBadge {
  text: string;
  color: string;
}

@Component({
  selector: 'app-employment-block',
  standalone: true,
  templateUrl: './employment-block.component.html',
  styleUrls: [
    './employment-block.component.scss',
    '../main-page.component.scss',
  ],
  imports: [CvBlockAppearenceComponent, BadgeComponent],
})
export class EmploymentBlockComponent implements OnInit {
  protected readonly m_possibleValues: { [key: string]: IBadge } = {
    Удаленка: {
      text: 'Удаленка',
      color: 'purple',
    },
    Офис: {
      text: 'Офис',
      color: 'green',
    },
    Гибрид: {
      text: 'Гибрид',
      color: 'yellow',
    },
  };

  @Input({ required: true }) items!: string[];

  protected m_activeItems: IBadge[] = [];

  ngOnInit(): void {
    for (const item of this.items) {
      this.m_activeItems.push(this.m_possibleValues[item]);
    }
  }
}
