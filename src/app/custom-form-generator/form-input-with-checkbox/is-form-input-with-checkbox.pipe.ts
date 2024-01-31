import { Pipe, PipeTransform } from '@angular/core';
import { IFormItem } from '../form-array/iform-item';
import { FormItems } from '../form-array/form-items';
import { FormInputWithCheckbox } from './form-input-with-checkbox';

@Pipe({
  name: 'isFormInputWithCheckbox',
  standalone: true,
})
export class IsFormInputWithCheckboxPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormInputWithCheckbox {
    return value.type === FormItems.FORM_INPUT_WITH_RADIO;
  }
}
