import { FormControl } from '@angular/forms';
import { IInputWithRadioButtonAndLabel } from './iinput-with-radio-button-and-label';
import { Observable } from 'rxjs';

interface IRequiredInputWithRadioButtonAndLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  inputPlaceholder?: string;
  class: string[];
}

export class InputWithRadioButtonAndLabel implements IInputWithRadioButtonAndLabel {
  public form: FormControl;

  public inputName: string;

  public inputTitle: string;

  public inputPlaceholder?: string;

  public class: string[];

  constructor(requiredInputWithRadioButtonAndLabel: IRequiredInputWithRadioButtonAndLabel) {
    this.form = requiredInputWithRadioButtonAndLabel.form;
    this.inputName = requiredInputWithRadioButtonAndLabel.inputName;
    this.inputTitle = requiredInputWithRadioButtonAndLabel.inputTitle;
    this.inputPlaceholder = requiredInputWithRadioButtonAndLabel.inputPlaceholder;
    this.class = requiredInputWithRadioButtonAndLabel.class;
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
