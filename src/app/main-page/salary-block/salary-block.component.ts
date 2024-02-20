import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-salary-block',
  standalone: true,
  templateUrl: './salary-block.component.html',
  styleUrls: ['./salary-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent],
})
export class SalaryBlockComponent {
  salaryRange = input.required<number[]>();

  currency = input.required<string>();

  size = input.required<string>();
}
