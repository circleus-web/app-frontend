import { FormItems } from './form-items';

export interface IFormItem {
  type: FormItems;

  getContent(): object;
}
