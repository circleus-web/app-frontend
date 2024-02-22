import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IToggle } from '../../toggle-button/itoggle';
import { IInput } from '../input/iinput';

export interface IInputWithToggleAndLabel {
  input: IInput;
  title: string;
  toggle: IToggle;
  toggleTitle: string;
  class: string[];
  invalid: boolean;
  hasError(error: string): boolean;
  valueChanges$: Observable<string>;
  formControl: FormControl;
}
