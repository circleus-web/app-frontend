import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';
import { IFormButton } from '../form-button/iform-button';
import { IFormWithDescription } from './iform-with-description';
import { FormStyle } from './form-style';
import { FormItems } from './form-items';
import { IFormItem } from './iform-item';

interface IRequiredFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  formsStyle?: FormStyle;
  buttons?: { [key: string]: IFormButton };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms: { [key: string]: IFormWithDescription };

  private _formGroup: FormGroup | undefined;

  public formsStyle?: FormStyle | undefined;

  public buttons?: { [key: string]: IFormButton };

  public activeItems?: { [key: string]: FormItems };

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formsStyle = formArrayWithDescriptions.formsStyle;
    this.buttons = formArrayWithDescriptions.buttons;
    this.activeItems = formArrayWithDescriptions.activeItems;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public getForm(formName: string): IFormWithDescription {
    return this.forms[formName];
  }

  public getFormControl(formName: string): FormControl {
    return this.getForm(formName).form;
  }

  public get iterableItems(): Required<IFormItem>[] {
    if (!this.activeItems) return [];
    const iterableItems: Required<IFormItem>[] = [];
    for (const [key, value] of Object.entries(this.activeItems)) {
      if (value === FormItems.FORM_INPUT_WITH_LABEL)
        iterableItems.push(this.getForm(key));
      else if (this.buttons) iterableItems.push(this.buttons[key]);
    }
    return iterableItems;
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});

      if (this.activeItems)
        for (const [key, value] of Object.entries(this.activeItems)) {
          if (value === FormItems.FORM_INPUT_WITH_LABEL) {
            this._formGroup.addControl(key, this.getFormControl(key));
          }
        }
    }
    return this._formGroup;
  }

  public isFormSubmited(formName: string): boolean {
    return this.getForm(formName).isSubmited ?? false;
  }

  public isInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public getFormValueChanges(formName: string): Observable<string> {
    return this.getForm(formName).getValueChanges();
  }
}
