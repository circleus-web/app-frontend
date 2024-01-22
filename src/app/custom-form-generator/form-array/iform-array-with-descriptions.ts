import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormButton } from '../form-button/iform-button';
import { FormStyle } from './form-style';
import { FormItems } from './form-items';
import { IFormItem } from './iform-item';
import { IFormInputWithLabel } from '../form-input/iform-input-with-label';

export interface IFormArrayWithDescriptions {
  iterableItems: Required<IFormItem>[];
  formGroup: FormGroup;
  isInvalid(): boolean;
  formsStyle?: FormStyle;
  getFormValueChanges(formName: string): Observable<string> | undefined;
  forms?: { [key: string]: IFormInputWithLabel };
  buttons?: { [key: string]: IFormButton };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}
