import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IFormInputWithLabel } from '../../../custom-form-generator/form-input/iform-input-with-label';
import { FormInputWithLabel } from '../../../custom-form-generator/form-input/form-input-with-label';
import { FormItems } from '../../../custom-form-generator/form-array/form-items';
import { FormArrayWithDescriptions } from '../../../custom-form-generator/form-array/form-array-with-descriptions';
import { IFormArrayWithDescriptions } from '../../../custom-form-generator/form-array/iform-array-with-descriptions';
import { CustomFormGeneratorComponent } from '../../../custom-form-generator/custom-form-generator.component';
import { FormFooterComponent } from '../form-footer/form-footer.component';
import { IFormCombobox } from '../../../custom-form-generator/form-combobox/iform-combobox';
import { FormCombobox } from '../../../custom-form-generator/form-combobox/form-combobox';

@Component({
  selector: 'app-job-info',
  standalone: true,
  templateUrl: './job-info.component.html',
  styles: ['@import "white-form";'],
  imports: [CustomFormGeneratorComponent, FormFooterComponent],
})
export class JobInfoComponent {
  private m_specializationForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'specialization',
    inputTitle: 'Специальность',
    inputPlaceholder: 'Дизайнер Интерфейсов',
    form: new FormControl('', [Validators.required]),
  });

  private m_gradeForm: IFormCombobox = new FormCombobox({
    comboboxName: 'grade',
    comboboxTitle: 'Грейд',
    comboboxOptions: ['Junior', 'Middle', 'Senior'],
    defaultValue: 'Junior',
    form: new FormControl('', [Validators.required]),
  });

  private m_formsOnPage = {
    specializationForm: this.m_specializationForm,
    gradeForm: this.m_gradeForm,
  };

  private m_jobActiveItems = {
    specializationForm: FormItems.FORM_INPUT_WITH_LABEL,
    gradeForm: FormItems.FORM_COMBOBOX_WITH_LABEL,
  };

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
      forms: this.m_formsOnPage,
      activeItems: this.m_jobActiveItems,
    });
}
