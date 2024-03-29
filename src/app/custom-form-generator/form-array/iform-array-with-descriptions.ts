import { WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { FormItems } from './form-items';
import { FormStyles } from './form-style';
import { IFormItem } from './iform-item';

export interface IFormStep {
  items: {
    [key: string]: FormItems;
  };
}

export interface IFormArrayWithDescriptions {
  getIterableItems(step: number): Required<IFormItem>[];
  allIterableItems: Required<IFormItem>[][];
  formGroup: FormGroup;
  isInvalid(): boolean;
  formsStyle?: FormStyles;
  previousStep(): void;
  nextStep(): void;
  setStep(step: number): void;
  setCurrentStepContent(content: IFormStep): void;
  currentStep: WritableSignal<number>;
  maxStep: number;
  stepValid(step: number): boolean;
  getFormValueChanges(formName: string): Observable<string> | undefined;
  onCreate?: () => void;
  onDestroy?: () => void;
  getActiveFormJSON(): string;
  getActiveFormContent(): object;
  getFullFormJSON(): string;
  getFullFormContent(): object;
}
