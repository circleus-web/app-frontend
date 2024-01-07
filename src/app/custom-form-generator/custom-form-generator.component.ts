import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IFormArrayWithDescriptions } from '../shared/iform-array-with-descriptions';

@Component({
  selector: 'app-custom-form-generator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-form-generator.component.html',
  styleUrl: './custom-form-generator.component.scss',
})
export class CustomFormGeneratorComponent {
  // private _formGroup: FormGroup | undefined;

  @Input({ required: true }) forms!: IFormArrayWithDescriptions;

  // protected get formGroup(): FormGroup {
  //   return this._formGroup;
  // }
}
