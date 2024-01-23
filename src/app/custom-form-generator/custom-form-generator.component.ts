import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IFormArrayWithDescriptions } from './form-array/iform-array-with-descriptions';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { IsFormInputWithLabelPipe } from './form-input/is-form-input-with-label.pipe';
import { IsFormButtonPipe } from './form-button/is-form-button.pipe';
import { InputWithLabelComponent } from '../shared/input/input-with-label/input-with-label.component';
import { IsFormTextPipe } from './form-text/is-form-text.pipe';
import { TextComponent } from '../shared/text/text.component';

@Component({
  selector: 'app-custom-form-generator',
  standalone: true,
  templateUrl: './custom-form-generator.component.html',
  styleUrl: './custom-form-generator.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    IsFormInputWithLabelPipe,
    IsFormButtonPipe,
    InputWithLabelComponent,
    IsFormTextPipe,
    TextComponent,
  ],
})
export class CustomFormGeneratorComponent implements OnInit, OnDestroy {
  @Input({ required: true }) forms!: IFormArrayWithDescriptions;

  ngOnInit(): void {
    this.forms.onCreate?.call(this.forms);
  }

  ngOnDestroy(): void {
    this.forms.onDestroy?.call(this.forms);
  }
}
