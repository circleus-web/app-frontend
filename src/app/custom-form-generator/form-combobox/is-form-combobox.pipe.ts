import { Pipe, PipeTransform } from '@angular/core';

import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';

import { FormCombobox } from './form-combobox';

@Pipe({
  name: 'isFormCombobox',
  standalone: true,
})
export class IsFormComboboxPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormCombobox {
    return value.type === FormItems.FORM_COMBOBOX_WITH_LABEL;
  }
}
