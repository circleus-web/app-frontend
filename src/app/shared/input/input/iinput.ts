import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

export interface IInput {
  formControl: FormControl;
  value: string;
  name: string;
  class: string[];
  placeholder?: string;
  icon?: {
    src: string;
  };
  invalid: boolean;
  hasError(error: string): boolean;
  valueChanges$: Observable<string>;
}
