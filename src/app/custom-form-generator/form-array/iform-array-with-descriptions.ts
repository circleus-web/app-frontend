import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormButton } from '../form-button/iform-button';
import { IFormWithDescription } from './iform-with-description';
import { FormStyle } from './form-style';
import { FormItems } from './form-items';
import { IFormItem } from './iform-item';

export interface IFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  getForm(formName: string): IFormWithDescription;
  iterableItems: Required<IFormItem>[];
  formGroup: FormGroup;
  formsStyle?: FormStyle;
  isFormSubmited(formName: string): boolean;
  getFormValueChanges(formName: string): Observable<string>;
  isInvalid(): boolean;
  buttons?: { [key: string]: IFormButton };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}
