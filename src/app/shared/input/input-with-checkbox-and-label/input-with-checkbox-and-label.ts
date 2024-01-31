import { FormControl } from '@angular/forms';
import { IInputWithCheckboxAndLabel } from './iinput-with-checkbox-and-label';
import { Observable } from 'rxjs';

interface IRequiredInputWithCheckboxAndLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  checkboxName: string;
  checkboxTitle: string;
  inputPlaceholder?: string;
  checkboxChecked?: boolean;
  class?: string[];
  isInversed?: boolean;
}

export class InputWithCheckboxAndLabel
implements IInputWithCheckboxAndLabel {
  public form: FormControl;

  public inputName: string;

  public inputTitle: string;

  public checkboxName: string;

  public checkboxTitle: string;

  public inputPlaceholder?: string;

  public checkboxChecked?: boolean;

  public class: string[];

  public isInversed?: boolean;

  constructor(
    requiredInputWithCheckboxAndLabel: IRequiredInputWithCheckboxAndLabel,
  ) {
    this.form = requiredInputWithCheckboxAndLabel.form;
    this.inputName = requiredInputWithCheckboxAndLabel.inputName;
    this.inputTitle = requiredInputWithCheckboxAndLabel.inputTitle;
    this.checkboxName = requiredInputWithCheckboxAndLabel.checkboxName;
    this.checkboxTitle = requiredInputWithCheckboxAndLabel.checkboxTitle;
    this.inputPlaceholder =
      requiredInputWithCheckboxAndLabel.inputPlaceholder;
    this.checkboxChecked =
      requiredInputWithCheckboxAndLabel.checkboxChecked;
    this.class = requiredInputWithCheckboxAndLabel.class || [];
    this.isInversed = requiredInputWithCheckboxAndLabel.isInversed;
  }

  public getValueChanges(): Observable<string> {
    return this.form.valueChanges;
  }

  public get isInvalid(): boolean {
    return this.form.invalid;
  }

  public hasError(error: string): boolean {
    return this.isInvalid && this.form.hasError(error);
  }
}
