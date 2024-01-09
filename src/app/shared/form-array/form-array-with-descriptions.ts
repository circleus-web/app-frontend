import { FormGroup } from '@angular/forms';

import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';
import { IButton } from '../button/ibutton';
import { IFormWithDescription } from './iform-with-description';

interface IRequiredFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  formTitle: string;
  formSubTitle?: string;
  buttons?: { [key: string]: IButton };
  activeButtons?: string[];
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms: { [key: string]: IFormWithDescription };

  private _formGroup: FormGroup | undefined;

  public formTitle: string;

  public formSubTitle?: string;

  public buttons?: { [key: string]: IButton };

  public activeButtons?: string[];

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formTitle = formArrayWithDescriptions.formTitle;
    this.formSubTitle = formArrayWithDescriptions.formSubTitle;
    this.buttons = formArrayWithDescriptions.buttons;
    this.activeButtons = formArrayWithDescriptions.activeButtons;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public get iterableForms(): IFormWithDescription[] {
    const res: IFormWithDescription[] = [];
    Object.keys(this.forms).forEach((key) => {
      if (!this.forms[key].disabled) {
        res.push(this.forms[key]);
      }
    });
    return res;
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});
      Object.keys(this.forms).forEach((key) => {
        if (!this.forms[key].disabled)
          this._formGroup?.addControl(key, this.forms[key].form);
      });
    }
    return this._formGroup;
  }
}
