import { Component } from '@angular/core';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-general-block',
  standalone: true,
  templateUrl: './general-block.component.html',
  styleUrl: './general-block.component.scss',
  imports: [BadgeComponent],
})
export class GeneralBlockComponent {}
