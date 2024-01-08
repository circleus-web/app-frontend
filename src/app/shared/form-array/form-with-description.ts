import { FormControl } from '@angular/forms';
import { IFormWithDescription } from './iform-with-description';

interface IRequiredFormWithDescription {
  form: FormControl;
  inputName: string;
  inputTitle?: string;
  inputPlaceholder?: string;
  isSubmited?: boolean | (() => boolean);
  disabled?: boolean | (() => boolean);
}

export class FormWithDescription implements IFormWithDescription {
  public form: FormControl;

  public inputName: string;

  public inputTitle?: string;

  public inputPlaceholder?: string;

  private _isSubmited?: boolean;

  private _getIsSubmited?: () => boolean;

  private _disabled?: boolean;

  private _getDisabled?: () => boolean;

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
    if (typeof form.disabled === 'boolean') {
      this._disabled = form.disabled;
    } else {
      this._getDisabled = form.disabled;
    }
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

  public get disabled(): boolean {
    return this._getDisabled?.call(this) || this._disabled || false;
  }

  public set disabled(value: boolean | (() => boolean)) {
    if (typeof value === 'boolean') {
      this._disabled = value;
      this._getDisabled = undefined;
    } else {
      this._getDisabled = value;
    }
  }
}
