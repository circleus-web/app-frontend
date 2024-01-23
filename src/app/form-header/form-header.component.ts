import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  standalone: true,
  imports: [],
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.scss',
})
export class FormHeaderComponent {
  @Input({ required: true }) formTitle!: string;

  @Input() formSubTitle?: string;
}
