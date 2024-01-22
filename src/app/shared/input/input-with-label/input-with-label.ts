import { FormControl } from '@angular/forms';

import { IInputWithLabel } from './iinput-with-label';
import { Observable } from 'rxjs';

interface IRequiredInputWithLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  inputPlaceholder: string;
  hintText?: string;
  class?: string[];
}

export class InputWithLabel implements IInputWithLabel {
  public form: FormControl;

  public inputName: string;

  public inputTitle: string;

  public inputPlaceholder: string;

  public hintText?: string;

  public class: string[] = [];

  constructor(requiredInputWithLabel: IRequiredInputWithLabel) {
    this.form = requiredInputWithLabel.form;
    this.inputName = requiredInputWithLabel.inputName;
    this.inputTitle = requiredInputWithLabel.inputTitle;
    this.inputPlaceholder = requiredInputWithLabel.inputPlaceholder;
    this.hintText = requiredInputWithLabel.hintText;
    this.class = requiredInputWithLabel.class ?? [];
  }

  public get isInvalid(): boolean {
    return this.form.invalid;
  }

  public hasError(error: string): boolean {
    return this.isInvalid && this.form.hasError(error);
  }

  public getValueChanges(): Observable<string> {
    return this.form.valueChanges;
  }
}
