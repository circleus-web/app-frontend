import { WritableSignal, signal } from '@angular/core';
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
import { IFormArrayWithDescriptions, IFormStep } from './iform-array-with-descriptions';
import { IFormItem } from './iform-item';

interface IRequiredFormArrayWithDescriptions {
  forms?: {
    [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithToggle;
  };
  formsStyle?: FormStyles;
  buttons?: { [key: string]: IFormButton };
  texts?: { [key: string]: IFormText };
  textsWithLinks?: { [key: string]: IFormTextWithLink };
  currentStep?: number;
  steps: IFormStep[];
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  private _forms?: {
    [key: string]: IFormInputWithLabel | IFormCombobox | IFormInputWithToggle;
  };

  private _formGroup?: FormGroup;

  public formsStyle?: FormStyles;

  private _buttons?: { [key: string]: IFormButton };

  private _texts?: { [key: string]: IFormText };

  private _textsWithLinks?: { [key: string]: IFormTextWithLink };

  public currentStep: WritableSignal<number>;

  private _steps: IFormStep[];

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this._forms = formArrayWithDescriptions.forms;
    this.formsStyle = formArrayWithDescriptions.formsStyle;
    this._buttons = formArrayWithDescriptions.buttons;
    this._texts = formArrayWithDescriptions.texts;
    this._textsWithLinks = formArrayWithDescriptions.textsWithLinks;
    this.currentStep = signal(formArrayWithDescriptions.currentStep || 0);
    this._steps = formArrayWithDescriptions.steps;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public getForm(
    inputName: string,
  ): IFormInputWithLabel | IFormCombobox | IFormInputWithToggle | undefined {
    return this._forms ? this._forms[inputName] : undefined;
  }

  private getFormButton(buttonName: string): IFormButton | undefined {
    return this._buttons ? this._buttons[buttonName] : undefined;
  }

  private getFormText(textName: string): IFormText | undefined {
    return this._texts ? this._texts[textName] : undefined;
  }

  private getFormTextWithLink(textName: string): IFormTextWithLink | undefined {
    return this._textsWithLinks ? (this._textsWithLinks[textName] as IFormTextWithLink) : undefined;
  }

  public getFormControl(formName: string): FormControl | undefined {
    return this.getForm(formName)?.formControl;
  }

  public previousStep(): void {
    this.currentStep.set(this.currentStep() - 1);
  }

  public nextStep(): void {
    this.currentStep.set(this.currentStep() + 1);
  }

  public setStep(step: number): void {
    this.currentStep.set(step);
  }

  public stepValid(step: number): boolean {
    return step >= 0 && step < this._steps.length && !!this._steps[step];
  }

  public get maxStep(): number {
    return this._steps.length - 1;
  }

  public getIterableItems(step: number): Required<IFormItem>[] {
    if (!this.stepValid(step)) return [];
    const iterableItems: Required<IFormItem>[] = [];
    for (const [key, value] of Object.entries(this._steps[step].items)) {
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

  public get allIterableItems(): Required<IFormItem>[][] {
    const res: Required<IFormItem>[][] = [];
    for (let i = 0; i <= this.maxStep; i++) {
      res.push(this.getIterableItems(i));
    }
    return res;
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});

      if (this.stepValid(this.currentStep()))
        for (const [key, value] of Object.entries(this._steps[this.currentStep()])) {
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
    return this.getForm(formName)?.valueChanges$;
  }

  public getActiveFormContent(): object {
    let resultObject: object = {};
    for (const item of this.getIterableItems(this.currentStep())) {
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
