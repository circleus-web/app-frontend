import { Component } from '@angular/core';

import { IFormArrayWithDescriptions } from '../../../custom-form-generator/form-array/iform-array-with-descriptions';
import { CustomFormGeneratorComponent } from '../../../custom-form-generator/custom-form-generator.component';
import { FormFooterComponent } from '../form-footer/form-footer.component';
import { FormArrayProvider } from '../../../custom-form-generator/form-array/form-array-provider.service';
import { RegistrationFormArrayProviderService } from '../../registration-form-array-provider.service';

@Component({
  selector: 'app-general-info',
  standalone: true,
  templateUrl: './general-info.component.html',
  styles: ['@import "white-form";'],
  imports: [CustomFormGeneratorComponent, FormFooterComponent],
  providers: [{ provide: FormArrayProvider, useExisting: RegistrationFormArrayProviderService }],
})
export class GeneralInfoComponent {
  constructor(private formArrayProvider: RegistrationFormArrayProviderService) {
    this.m_formArrayWithDescriptions = formArrayProvider.getFormArray('general_info');
  }

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions;
}
