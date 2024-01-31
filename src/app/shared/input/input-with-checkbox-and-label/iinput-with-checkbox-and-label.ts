import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IInputWithCheckboxAndLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  checkboxName: string;
  checkboxTitle: string;
  inputPlaceholder?: string;
  checkboxChecked?: boolean;
  hintText?: string;
  class: string[];
  isInversed?: boolean;
  isInvalid: boolean;
  hasError(error: string): boolean;
  getValueChanges(): Observable<string>;
}
