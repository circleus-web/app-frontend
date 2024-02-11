import { Component, Input } from '@angular/core';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-about-block',
  standalone: true,
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.scss', '../main-page.component.scss'],
  imports: [CvBlockAppearenceComponent],
})
export class AboutBlockComponent {
  @Input({ required: true }) text!: string;
}
