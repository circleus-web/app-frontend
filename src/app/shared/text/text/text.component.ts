import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { IText } from './itext';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  public text = input.required<IText>();
}
