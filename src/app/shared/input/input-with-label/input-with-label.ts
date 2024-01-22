import { FormControl } from '@angular/forms';

import { IInputWithLabel } from './iinput-with-label';

export class InputWithLabel implements IInputWithLabel {
  constructor(
    public form: FormControl,
    public inputName: string,
    public inputTitle: string,
    public inputPlaceholder?: string,
    public hintText?: string,
  ) {}
}
