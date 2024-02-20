import { InputWithToggleAndLabel } from '../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label';
import { FormItems } from '../form-array/form-items';
import { IFormInputWithToggle } from './iform-input-with-toggle';

export class FormInputWithToggle
  extends InputWithToggleAndLabel
  implements IFormInputWithToggle
{
  type: FormItems = FormItems.FORM_INPUT_WITH_TOGGLE;

  public getJSON(): string[] | string | undefined {
    return [
      `"${this.inputName}": "${this.form.value}"`,
      `"${this.toggleName}": "${
        (
          this.isInversed !== undefined
            ? this.toggleChecked !== this.isInversed
            : this.toggleChecked
        )
          ? 'true'
          : 'false'
      }"`,
    ];
  }

  public getContent(): object {
    const content: { [key: string]: string | boolean } = {};

    content[this.inputName] = this.form.value;
    content[this.toggleName] =
      this.isInversed !== undefined
        ? this.toggleChecked !== this.isInversed
        : !!this.toggleChecked;

    return content;
  }
}
