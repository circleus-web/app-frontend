import { Pipe, PipeTransform } from '@angular/core';

import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';

import { IFormTextWithLink } from './iform-text-with-link';

@Pipe({
  name: 'isFormTextWithLink',
  standalone: true,
})
export class IsFormTextWithLinkPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is IFormTextWithLink {
    return value.type === FormItems.FORM_TEXT_WITH_LINK;
  }
}
