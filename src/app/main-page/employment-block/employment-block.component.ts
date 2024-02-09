import { Component, Input, OnInit } from '@angular/core';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { Badge } from '../../shared/badge/badge';

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
  protected readonly m_possibleValues: { [key: string]: Badge } = {
    Удаленка: new Badge({
      text: 'Удаленка',
      class: ['purple'],
    }),
    Офис: new Badge({
      text: 'Офис',
      class: ['green'],
    }),
    Гибрид: new Badge({
      text: 'Гибрид',
      class: ['yellow'],
    }),
  };

  @Input({ required: true }) items!: string[];

  protected m_activeItems: Badge[] = [];

  ngOnInit(): void {
    for (const item of this.items) {
      this.m_activeItems.push(this.m_possibleValues[item]);
    }
  }
}
