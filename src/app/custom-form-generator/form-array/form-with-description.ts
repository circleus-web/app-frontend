import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormWithDescription } from './iform-with-description';
import { FormItems } from './form-items';

interface IRequiredFormWithDescription {
  form: FormControl;
  inputName: string;
  inputTitle?: string;
  inputPlaceholder?: string;
  isSubmited?: boolean | (() => boolean);
}

export class FormWithDescription implements IFormWithDescription {
  public type: FormItems = FormItems.FORM_INPUT_WITH_LABEL;

  public form: FormControl;

  public inputName: string;

  public inputTitle?: string;

  public inputPlaceholder?: string;

  private _isSubmited?: boolean;

  private _getIsSubmited?: () => boolean;

  constructor(form: IRequiredFormWithDescription) {
    this.form = form.form;
    this.inputName = form.inputName;
    this.inputTitle = form.inputTitle;
    this.inputPlaceholder = form.inputPlaceholder;
    if (typeof form.isSubmited === 'boolean') {
      this._isSubmited = form.isSubmited;
    } else {
      this._getIsSubmited = form.isSubmited;
    }
  }

  public getValueChanges(): Observable<string> {
    return this.form.valueChanges;
  }

  public get isSubmited(): boolean {
    return this._getIsSubmited?.call(this) || this._isSubmited || false;
  }

  public set isSubmited(value: boolean | (() => boolean)) {
    if (typeof value === 'boolean') {
      this._isSubmited = value;
      this._getIsSubmited = undefined;
    } else {
      this._getIsSubmited = value;
    }
  }
}
