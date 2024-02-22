import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

export interface IComboboxWithLabel {
  formControl: FormControl;
  comboboxName: string;
  comboboxTitle: string;
  comboboxOptions: string[];
  defaultValue?: string;
  class: string[];
  valueChanges$: Observable<string>;
}
