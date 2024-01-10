import { FormGroup } from '@angular/forms';

import { IButton } from '../button/ibutton';
import { IFormWithDescription } from './iform-with-description';
import { Observable } from 'rxjs';

export interface IFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  getForm(formName: string): IFormWithDescription;
  iterableForms: IFormWithDescription[];
  formGroup: FormGroup;
  isFormSubmited(formName: string): boolean;
  isFormDisabled(formName: string): boolean;
  getFormValueChanges(formName: string): Observable<string>;
  formTitle: string;
  formSubTitle?: string;
  isInvalid(): boolean;
  buttons?: { [key: string]: IButton };
  activeButtons?: string[];
  onCreate?: () => void;
  onDestroy?: () => void;
}
