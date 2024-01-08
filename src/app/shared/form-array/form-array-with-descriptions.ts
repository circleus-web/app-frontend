import { FormGroup } from '@angular/forms';

import {
  IFormArrayWithDescriptions,
  IFormWithDescription,
} from './iform-array-with-descriptions';
import { IButton } from '../button/ibutton';

interface IRequiredFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  formTitle: string;
  formSubTitle?: string;
  submitButton?: IButton;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms: { [key: string]: IFormWithDescription };

  private _formGroup: FormGroup | undefined;

  public formTitle: string;

  public formSubTitle?: string;

  public submitButton?: IButton;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formTitle = formArrayWithDescriptions.formTitle;
    this.formSubTitle = formArrayWithDescriptions.formSubTitle;
    this.submitButton = formArrayWithDescriptions.submitButton;
  }

  public get iterableForms(): IFormWithDescription[] {
    return Object.values(this.forms);
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});
      Object.keys(this.forms).forEach((key) => {
        this._formGroup?.addControl(key, this.forms[key].form);
      });
    }
    return this._formGroup;
  }
}
