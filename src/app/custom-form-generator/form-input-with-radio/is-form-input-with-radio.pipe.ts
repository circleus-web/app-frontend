import { Pipe, PipeTransform } from '@angular/core';
import { IFormItem } from '../form-array/iform-item';
import { FormItems } from '../form-array/form-items';
import { FormInputWithRadio } from './form-input-with-radio';

@Pipe({
  name: 'isFormInputWithRadio',
  standalone: true,
})
export class IsFormInputWithRadioPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormInputWithRadio {
    return value.type === FormItems.FORM_INPUT_WITH_RADIO;
  }
}
