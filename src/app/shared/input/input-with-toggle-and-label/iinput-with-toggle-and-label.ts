import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IInputWithToggleAndLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  toggleName: string;
  toggleTitle: string;
  inputPlaceholder?: string;
  toggleChecked?: boolean;
  hintText?: string;
  class: string[];
  isInversed?: boolean;
  isInvalid: boolean;
  hasError(error: string): boolean;
  getValueChanges(): Observable<string>;
}
