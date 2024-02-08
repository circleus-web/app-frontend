import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-block-appearence',
  standalone: true,
  imports: [],
  templateUrl: './cv-block-appearence.component.html',
  styleUrl: './cv-block-appearence.component.scss',
})
export class CvBlockAppearenceComponent {
  @Input({ required: true }) title!: string;
}
