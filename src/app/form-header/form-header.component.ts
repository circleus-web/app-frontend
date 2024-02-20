import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  standalone: true,
  imports: [],
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.scss',
})
export class FormHeaderComponent {
  formTitle = input.required<string>();

  formSubTitle = input<string | undefined>();
}
