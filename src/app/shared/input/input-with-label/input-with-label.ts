import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IInput } from '../input/iinput';

import { IInputWithLabel } from './iinput-with-label';

interface IRequiredInputWithLabel {
  input: IInput;
  title: string;
  class?: string[];
}

export class InputWithLabel implements IInputWithLabel {
  public input: IInput;

  public title: string;

  public class: string[] = [];

  constructor(requiredInputWithLabel: IRequiredInputWithLabel) {
    this.input = requiredInputWithLabel.input;
    this.title = requiredInputWithLabel.title;
    this.class = requiredInputWithLabel.class ?? [];
  }

  public get invalid(): boolean {
    return this.input.invalid;
  }

  public hasError(error: string): boolean {
    return this.input.hasError(error);
  }

  public get valueChanges$(): Observable<string> {
    return this.input.valueChanges$;
  }

  public get formControl(): FormControl {
    return this.input.formControl;
  }
}
