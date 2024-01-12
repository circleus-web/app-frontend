import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';
import { IButton } from '../button/ibutton';
import { IFormWithDescription } from './iform-with-description';
import { FormStyle } from './form-style';

interface IRequiredFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  formsStyle?: FormStyle;
  buttons?: { [key: string]: IButton };
  activeButtons?: string[];
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms: { [key: string]: IFormWithDescription };

  private _formGroup: FormGroup | undefined;

  public formsStyle?: FormStyle | undefined;

  public buttons?: { [key: string]: IButton };

  public activeButtons?: string[];

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formsStyle = formArrayWithDescriptions.formsStyle;
    this.buttons = formArrayWithDescriptions.buttons;
    this.activeButtons = formArrayWithDescriptions.activeButtons;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public getForm(formName: string): IFormWithDescription {
    return this.forms[formName];
  }

  public getFormControl(formName: string): FormControl {
    return this.getForm(formName).form;
  }

  private getAllFormsArray(): IFormWithDescription[] {
    return Object.values(this.forms);
  }

  public get iterableForms(): IFormWithDescription[] {
    return this.getAllFormsArray().filter((value) => !value.disabled);
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});

      Object.keys(this.forms).forEach((key) => {
        if (!this.isFormDisabled(key))
          this._formGroup?.addControl(key, this.getFormControl(key));
      });
    }
    return this._formGroup;
  }

  public isFormSubmited(formName: string): boolean {
    return this.getForm(formName).isSubmited ?? false;
  }

  isFormDisabled(formName: string): boolean {
    return this.getForm(formName).disabled ?? false;
  }

  public isInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public getFormValueChanges(formName: string): Observable<string> {
    return this.getForm(formName).getValueChanges();
  }
}
