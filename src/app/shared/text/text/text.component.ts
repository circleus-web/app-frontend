import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IText } from './itext';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input({ required: true }) public text!: IText;
}
