import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IButton } from '../button/ibutton';
import { IFormWithDescription } from './iform-with-description';
import { FormStyle } from './form-style';

export interface IFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  getForm(formName: string): IFormWithDescription;
  iterableForms: IFormWithDescription[];
  formGroup: FormGroup;
  formsStyle?: FormStyle;
  isFormSubmited(formName: string): boolean;
  isFormDisabled(formName: string): boolean;
  getFormValueChanges(formName: string): Observable<string>;
  isInvalid(): boolean;
  buttons?: { [key: string]: IButton };
  activeButtons?: string[];
  onCreate?: () => void;
  onDestroy?: () => void;
}
