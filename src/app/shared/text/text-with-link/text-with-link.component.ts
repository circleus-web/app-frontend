import { Component, Input } from '@angular/core';
import { ITextWithLink } from './itext-with-link';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
