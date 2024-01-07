import { FormControl } from '@angular/forms';

export interface IFormWithDescription {
  form: FormControl;
  inputName: string;
}

export interface IButton {
  text: string;
  click: () => void;
}

export interface IFormArrayWithDescriptions {
  forms: IFormWithDescription[];
  formTitle: string;
  formSubTitle?: string;
  submitButton?: IButton;
}
