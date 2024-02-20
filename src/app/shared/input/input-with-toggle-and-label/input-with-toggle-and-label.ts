import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IInputWithToggleAndLabel } from './iinput-with-toggle-and-label';

interface IRequiredInputWithToggleAndLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  toggleName: string;
  toggleTitle: string;
  inputPlaceholder?: string;
  toggleChecked?: boolean;
  class?: string[];
  isInversed?: boolean;
}

export class InputWithToggleAndLabel implements IInputWithToggleAndLabel {
  public form: FormControl;

  public inputName: string;

  public inputTitle: string;

  public toggleName: string;

  public toggleTitle: string;

  public inputPlaceholder?: string;

  public toggleChecked?: boolean;

  public class: string[];

  public isInversed?: boolean;

  constructor(requiredInputWithToggleAndLabel: IRequiredInputWithToggleAndLabel) {
    this.form = requiredInputWithToggleAndLabel.form;
    this.inputName = requiredInputWithToggleAndLabel.inputName;
    this.inputTitle = requiredInputWithToggleAndLabel.inputTitle;
    this.toggleName = requiredInputWithToggleAndLabel.toggleName;
    this.toggleTitle = requiredInputWithToggleAndLabel.toggleTitle;
    this.inputPlaceholder = requiredInputWithToggleAndLabel.inputPlaceholder;
    this.toggleChecked = requiredInputWithToggleAndLabel.toggleChecked;
    this.class = requiredInputWithToggleAndLabel.class || [];
    this.isInversed = requiredInputWithToggleAndLabel.isInversed;
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
