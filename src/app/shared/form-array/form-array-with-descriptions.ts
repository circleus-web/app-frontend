import {
  IFormArrayWithDescriptions,
  IFormWithDescription,
} from './iform-array-with-descriptions';
import { IButton } from '../button/ibutton';

interface IRequiredFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  formTitle: string;
  formSubTitle?: string;
  submitButton?: IButton;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms: { [key: string]: IFormWithDescription };

  public formTitle: string;

  public formSubTitle?: string;

  public submitButton?: IButton;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formTitle = formArrayWithDescriptions.formTitle;
    this.formSubTitle = formArrayWithDescriptions.formSubTitle;
    this.submitButton = formArrayWithDescriptions.submitButton;
  }

  public get iterableForms(): IFormWithDescription[] {
    return Object.values(this.forms);
  }
}
