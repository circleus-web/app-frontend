import { InputWithLabel } from '../../shared/input/input-with-label/input-with-label';
import { FormItems } from '../form-array/form-items';
import { IFormInputWithLabel } from './iform-input-with-label';

export class FormInputWithLabel
  extends InputWithLabel
  implements IFormInputWithLabel {
  public type: FormItems = FormItems.FORM_INPUT_WITH_LABEL;

  public getJSON(): string[] | string | undefined {
    return `"${this.inputName}": "${this.form.value}"`;
  }
}
