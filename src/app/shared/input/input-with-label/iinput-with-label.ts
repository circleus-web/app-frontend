import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

export interface IInputWithLabel {
  form: FormControl;
  inputName: string;
  inputTitle: string;
  inputPlaceholder?: string;
  hintText?: string;
  class: string[];
  isInvalid: boolean;
  hasError(error: string): boolean;
  getValueChanges(): Observable<string>;
}
