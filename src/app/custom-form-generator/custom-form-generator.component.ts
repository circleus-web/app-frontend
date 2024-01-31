import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IFormArrayWithDescriptions } from './form-array/iform-array-with-descriptions';
import { ButtonComponent } from '../shared/button/button.component';
import { IsFormInputWithLabelPipe } from './form-input/is-form-input-with-label.pipe';
import { IsFormButtonPipe } from './form-button/is-form-button.pipe';
import { InputWithLabelComponent } from '../shared/input/input-with-label/input-with-label.component';
import { IsFormTextPipe } from './form-text/is-form-text.pipe';
import { TextComponent } from '../shared/text/text/text.component';
import { IsFormTextWithLinkPipe } from './form-text-with-link/is-form-text-with-link.pipe';
import { TextWithLinkComponent } from '../shared/text/text-with-link/text-with-link.component';
import { IsFormComboboxPipe } from './form-combobox/is-form-combobox.pipe';
import { ComboboxWithLabelComponent } from '../shared/input/combobox-with-label/combobox-with-label.component';
import { IsFormInputWithRadioPipe } from './form-input-with-radio/is-form-input-with-radio.pipe';
import { InputWithRadioButtonAndLabelComponent } from '../shared/input/input-with-radio-button-and-label/input-with-radio-button-and-label.component';

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
    IsFormTextWithLinkPipe,
    TextWithLinkComponent,
    IsFormComboboxPipe,
    ComboboxWithLabelComponent,
    IsFormInputWithRadioPipe,
    InputWithRadioButtonAndLabelComponent,
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
