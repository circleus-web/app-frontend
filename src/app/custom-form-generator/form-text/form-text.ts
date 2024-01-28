import { Text } from '../../shared/text/text/text';
import { FormItems } from '../form-array/form-items';
import { IFormText } from './iform-text';

export class FormText extends Text implements IFormText {
  public type: FormItems = FormItems.FORM_TEXT;
}
