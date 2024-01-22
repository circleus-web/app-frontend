import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormArrayItem } from './iform-array-item';
import { FormItems } from './form-items';

export interface IFormWithDescription extends IFormArrayItem {
  type: FormItems;
  form: FormControl;
  getValueChanges(): Observable<string>;
  inputName: string;
  inputPlaceholder?: string;
  inputTitle?: string;
  isSubmited?: boolean;
}
