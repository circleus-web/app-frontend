import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-block-appearence',
  standalone: true,
  imports: [],
  templateUrl: './cv-block-appearence.component.html',
  styleUrls: ['./cv-block-appearence.component.scss', '../main-page.component.scss'],
})
export class CvBlockAppearenceComponent {
  @Input({ required: true }) title!: string;
}
