import { Component, Input } from '@angular/core';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-salary-block',
  standalone: true,
  templateUrl: './salary-block.component.html',
  styleUrls: ['./salary-block.component.scss', '../main-page.component.scss'],
  imports: [CvBlockAppearenceComponent],
})
export class SalaryBlockComponent {
  @Input({ required: true }) salaryRange!: number[];

  @Input({ required: true }) currency!: string;
}
