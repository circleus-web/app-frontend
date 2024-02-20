import { ComboboxWithLabel } from '../../shared/input/combobox-with-label/combobox-with-label';
import { FormItems } from '../form-array/form-items';
import { IFormCombobox } from './iform-combobox';

export class FormCombobox extends ComboboxWithLabel implements IFormCombobox {
  public type: FormItems = FormItems.FORM_COMBOBOX_WITH_LABEL;

  public getJSON(): string[] | string | undefined {
    return `"${this.comboboxName}": "${this.form.value}"`;
  }

  public getContent(): object {
    const content: { [key: string]: string } = {};

    content[this.comboboxName] = this.form.value;

    return content;
  }
}
