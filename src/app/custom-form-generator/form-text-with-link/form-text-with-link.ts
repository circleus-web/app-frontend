import { TextWithLink } from '../../shared/text/text-with-link/text-with-link';
import { FormItems } from '../form-array/form-items';
import { IFormTextWithLink } from './iform-text-with-link';

export class FormTextWithLink
  extends TextWithLink
  implements IFormTextWithLink {
  public type: FormItems.FORM_TEXT_WITH_LINK = FormItems.FORM_TEXT_WITH_LINK;

  public getContent(): object {
    return {};
  }
}
