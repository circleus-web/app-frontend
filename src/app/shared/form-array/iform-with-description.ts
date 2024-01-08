import { FormControl } from '@angular/forms';

export interface IFormWithDescription {
  form: FormControl;
  inputName: string;
  inputPlaceholder?: string;
  inputTitle?: string;
  isSubmited?: boolean;
  disabled?: boolean;
}
