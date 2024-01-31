import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormButton } from '../form-button/iform-button';
import { FormStyle } from './form-style';
import { FormItems } from './form-items';
import { IFormItem } from './iform-item';
import { IFormInputWithLabel } from '../form-input/iform-input-with-label';
import { IFormText } from '../form-text/iform-text';
import { IFormTextWithLink } from '../form-text-with-link/iform-text-with-link';
import { IFormCombobox } from '../form-combobox/iform-combobox';
import { IFormInputWithRadio } from '../form-input-with-radio/iform-input-with-radio';

export interface IFormArrayWithDescriptions {
  iterableItems: Required<IFormItem>[];
  formGroup: FormGroup;
  isInvalid(): boolean;
  formsStyle?: FormStyle;
  getFormValueChanges(formName: string): Observable<string> | undefined;
  forms?: { [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithRadio };
  buttons?: { [key: string]: IFormButton };
  texts?: { [key: string]: IFormText };
  textsWithLinks?: { [key: string]: IFormTextWithLink };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}
