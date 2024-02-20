import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ITextWithLink } from './itext-with-link';

@Component({
  selector: 'app-text-with-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './text-with-link.component.html',
  styleUrl: './text-with-link.component.scss',
})
export class TextWithLinkComponent {
  textWithLink = input.required<ITextWithLink>();
}
