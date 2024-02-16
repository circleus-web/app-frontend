import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';

export abstract class FormArrayProvider {
  public abstract getFormArray(key: string): IFormArrayWithDescriptions;
}

export class FormNotFoundError extends Error {
  constructor(formName: string) {
    super(`Form ${formName} not found`);
  }
}
