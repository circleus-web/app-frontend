import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  @Input({ required: true }) textWithLink!: ITextWithLink;
}
