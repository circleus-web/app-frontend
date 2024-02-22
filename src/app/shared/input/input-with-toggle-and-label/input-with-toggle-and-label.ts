import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IToggle } from '../../toggle-button/itoggle';
import { IInput } from '../input/iinput';

import { IInputWithToggleAndLabel } from './iinput-with-toggle-and-label';

interface IRequiredInputWithToggleAndLabel {
  input: IInput;
  title: string;
  toggle: IToggle;
  toggleTitle: string;
  class?: string[];
}

export class InputWithToggleAndLabel implements IInputWithToggleAndLabel {
  public input: IInput;

  public title: string;

  public toggle: IToggle;

  public toggleTitle: string;

  public class: string[];

  constructor(inputWithToggleAndLabel: IRequiredInputWithToggleAndLabel) {
    this.input = inputWithToggleAndLabel.input;
    this.title = inputWithToggleAndLabel.title;
    this.toggle = inputWithToggleAndLabel.toggle;
    this.toggleTitle = inputWithToggleAndLabel.toggleTitle;
    this.class = inputWithToggleAndLabel.class || [];
  }

  public get valueChanges$(): Observable<string> {
    return this.input.valueChanges$;
  }

  public get invalid(): boolean {
    return this.input.invalid;
  }

  public hasError(error: string): boolean {
    return this.input.hasError(error);
  }

  public get formControl(): FormControl {
    return this.input.formControl;
  }
}
