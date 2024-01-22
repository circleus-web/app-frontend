import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';

export abstract class FormArrayProvider {
  public abstract getFormArray(): { [key: string]: IFormArrayWithDescriptions };
}
