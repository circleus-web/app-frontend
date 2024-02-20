import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

export interface IComboboxWithLabel {
  form: FormControl;
  comboboxName: string;
  comboboxTitle: string;
  comboboxOptions: string[];
  defaultValue?: string;
  class: string[];
  getValueChanges(): Observable<string> | undefined;
}
