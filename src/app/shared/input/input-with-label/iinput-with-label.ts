import { FormControl } from '@angular/forms';

export interface IInputWithLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  inputPlaceholder?: string;
  hintText?: string;
  formsStyle?: string;
  isInvalid: boolean;
  hasError(error: string): boolean;
}
