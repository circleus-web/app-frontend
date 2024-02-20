import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { IFormButton } from '../form-button/iform-button';
import { IFormCombobox } from '../form-combobox/iform-combobox';
import { IFormInputWithToggle } from '../form-input-with-toggle/iform-input-with-toggle';
import { IFormInputWithLabel } from '../form-input/iform-input-with-label';
import { IFormTextWithLink } from '../form-text-with-link/iform-text-with-link';
import { IFormText } from '../form-text/iform-text';

import { FormItems } from './form-items';
import { FormStyles } from './form-style';
import { IFormItem } from './iform-item';

export interface IFormArrayWithDescriptions {
  iterableItems: Required<IFormItem>[];
  formGroup: FormGroup;
  isInvalid(): boolean;
  formsStyle?: FormStyles;
  getFormValueChanges(formName: string): Observable<string> | undefined;
  forms?: {
    [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithToggle;
  };
  buttons?: { [key: string]: IFormButton };
  texts?: { [key: string]: IFormText };
  textsWithLinks?: { [key: string]: IFormTextWithLink };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
  getActiveFormJSON(): string;
  getActiveFormContent(): object;
}
