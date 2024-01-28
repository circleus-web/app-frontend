import { ITextWithLink } from '../../shared/text/text-with-link/itext-with-link';
import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';

export interface IFormTextWithLink extends ITextWithLink, IFormItem {
  type: FormItems.FORM_TEXT_WITH_LINK;
}
