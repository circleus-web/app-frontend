import { FormControl } from '@angular/forms';

import { IInputWithLabel } from './iinput-with-label';

export class InputWithLabel implements IInputWithLabel {
  constructor(
    public form: FormControl,
    public inputName: string,
    public inputTitle: string,
    public inputPlaceholder?: string,
    public hintText?: string,
    public formsStyle?: string,
  ) {}

  public get isInvalid(): boolean {
    return this.form.invalid;
  }

  public hasError(error: string): boolean {
    return this.isInvalid && this.form.hasError(error);
  }
}
