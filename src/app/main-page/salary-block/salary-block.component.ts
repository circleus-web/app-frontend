import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-salary-block',
  standalone: true,
  templateUrl: './salary-block.component.html',
  styleUrls: ['./salary-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent],
})
export class SalaryBlockComponent {
  @Input({ required: true }) salaryRange!: number[];

  @Input({ required: true }) currency!: string;

  @Input({ required: true }) size!: string;
}
