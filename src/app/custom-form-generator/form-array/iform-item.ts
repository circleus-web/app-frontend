import { FormItems } from './form-items';

export interface IFormItem {
  type: FormItems;

  getJSON(): string[] | string | undefined;
}
