import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

import { ILanguageRecord } from './ilanguage-record';

@Component({
  selector: 'app-languages-block',
  standalone: true,
  templateUrl: './languages-block.component.html',
  styleUrls: ['./languages-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent],
})
export class LanguagesBlockComponent {
  languages = input.required<ILanguageRecord[]>();

  size = input.required<string>();
}
