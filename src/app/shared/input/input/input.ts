import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IInput } from './iinput';

interface IRequiredInput {
  formControl: FormControl;
  name: string;
  class?: string[];
  placeholder?: string;
  icon?: {
    src: string;
  };
}

export class Input implements IInput {
  public formControl: FormControl;

  public name: string;

  public class: string[];

  public placeholder?: string;

  public icon?: { src: string };

  constructor(inputContent: IRequiredInput) {
    this.formControl = inputContent.formControl;
    this.name = inputContent.name;
    this.class = inputContent.class || [];
    this.placeholder = inputContent.placeholder;
    this.icon = inputContent.icon;
  }

  public get invalid(): boolean {
    return this.formControl.invalid;
  }

  public hasError(error: string): boolean {
    return this.formControl.hasError(error);
  }

  public get valueChanges$(): Observable<string> {
    return this.formControl.valueChanges;
  }

  public get value(): string {
    return this.formControl.value;
  }
}
