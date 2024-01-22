import { Pipe, PipeTransform } from '@angular/core';

import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';
import { FormInputWithLabel } from './form-input-with-label';

@Pipe({
  name: 'isFormInputWithLabel',
  standalone: true,
})
export class IsFormInputWithLabelPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormInputWithLabel {
    return value.type === FormItems.FORM_INPUT_WITH_LABEL;
  }
}
