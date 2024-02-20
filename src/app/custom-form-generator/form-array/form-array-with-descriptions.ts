import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { IFormButton } from '../form-button/iform-button';
import { IFormCombobox } from '../form-combobox/iform-combobox';
import { IFormInputWithToggle } from '../form-input-with-toggle/iform-input-with-toggle';
import { IFormInputWithLabel } from '../form-input/iform-input-with-label';
import { IFormTextWithLink } from '../form-text-with-link/iform-text-with-link';
import { IFormText } from '../form-text/iform-text';

import { FormItems } from './form-items';
import { FormStyles } from './form-style';
import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';
import { IFormItem } from './iform-item';

interface IRequiredFormArrayWithDescriptions {
  forms?: {
    [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithToggle;
  };
  formsStyle?: FormStyles;
  buttons?: { [key: string]: IFormButton };
  texts?: { [key: string]: IFormText };
  textsWithLinks?: { [key: string]: IFormTextWithLink };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms?: {
    [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithToggle;
  };

  private _formGroup?: FormGroup;

  public formsStyle?: FormStyles;

  public buttons?: { [key: string]: IFormButton };

  public texts?: { [key: string]: IFormText };

  public textsWithLinks?: { [key: string]: IFormTextWithLink };

  public activeItems?: { [key: string]: FormItems };

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formsStyle = formArrayWithDescriptions.formsStyle;
    this.buttons = formArrayWithDescriptions.buttons;
    this.texts = formArrayWithDescriptions.texts;
    this.textsWithLinks = formArrayWithDescriptions.textsWithLinks;
    this.activeItems = formArrayWithDescriptions.activeItems;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public getForm(
    inputName: string,
  ): IFormInputWithLabel | IFormCombobox | IFormInputWithToggle | undefined {
    return this.forms ? this.forms[inputName] : undefined;
  }

  private getFormButton(buttonName: string): IFormButton | undefined {
    return this.buttons ? this.buttons[buttonName] : undefined;
  }

  private getFormText(textName: string): IFormText | undefined {
    return this.texts ? this.texts[textName] : undefined;
  }

  private getFormTextWithLink(textName: string): IFormTextWithLink | undefined {
    return this.textsWithLinks ? (this.textsWithLinks[textName] as IFormTextWithLink) : undefined;
  }

  public getFormControl(formName: string): FormControl | undefined {
    return this.getForm(formName)?.form;
  }

  public get iterableItems(): Required<IFormItem>[] {
    if (!this.activeItems) return [];
    const iterableItems: Required<IFormItem>[] = [];
    for (const [key, value] of Object.entries(this.activeItems)) {
      const formInputWithLabel = this.getForm(key);
      const formButton = this.getFormButton(key);
      const formText = this.getFormText(key);
      const formTextWithLink = this.getFormTextWithLink(key);
      switch (value) {
        case FormItems.FORM_INPUT_WITH_LABEL:
        case FormItems.FORM_COMBOBOX_WITH_LABEL:
        case FormItems.FORM_INPUT_WITH_TOGGLE:
          if (formInputWithLabel) iterableItems.push(formInputWithLabel);
          break;
        case FormItems.FORM_BUTTON:
          if (formButton) iterableItems.push(formButton);
          break;
        case FormItems.FORM_TEXT:
          if (formText) iterableItems.push(formText);
          break;
        case FormItems.FORM_TEXT_WITH_LINK:
          if (formTextWithLink) iterableItems.push(formTextWithLink);
          break;
      }
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

  public isInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public getFormValueChanges(formName: string): Observable<string> | undefined {
    return this.getForm(formName)?.getValueChanges();
  }

  public getActiveFormContent(): object {
    let resultObject: object = {};
    for (const item of this.iterableItems) {
      resultObject = {
        ...resultObject,
        ...item.getContent(),
      };
    }

    return resultObject;
  }

  public getActiveFormJSON(): string {
    return JSON.stringify(this.getActiveFormContent());
  }
}
