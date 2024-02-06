import { Pipe, PipeTransform } from '@angular/core';
import { IFormItem } from '../form-array/iform-item';
import { FormItems } from '../form-array/form-items';
import { FormInputWithToggle } from './form-input-with-toggle';

@Pipe({
  name: 'isFormInputWithToggle',
  standalone: true,
})
export class IsFormInputWithTogglePipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormInputWithToggle {
    return value.type === FormItems.FORM_INPUT_WITH_TOGGLE;
  }
}
