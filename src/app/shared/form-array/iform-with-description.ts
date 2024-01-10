import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IFormWithDescription {
  form: FormControl;
  getValueChanges(): Observable<string>;
  inputName: string;
  inputPlaceholder?: string;
  inputTitle?: string;
  isSubmited?: boolean;
  disabled?: boolean;
}
