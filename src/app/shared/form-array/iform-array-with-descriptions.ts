import { FormGroup } from '@angular/forms';

import { IButton } from '../button/ibutton';
import { IFormWithDescription } from './iform-with-description';

export interface IFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  iterableForms: IFormWithDescription[];
  formGroup: FormGroup;
  formTitle: string;
  formSubTitle?: string;
  submitButton?: IButton;
}
