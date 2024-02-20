import { Pipe, PipeTransform } from '@angular/core';

import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';

import { FormText } from './form-text';

@Pipe({
  name: 'isFormText',
  standalone: true,
})
export class IsFormTextPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormText {
    return value.type === FormItems.FORM_TEXT;
  }
}
