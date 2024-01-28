import { IText } from './itext';

interface IRequiredText {
  text: string;
  class?: string[];
}

export class Text implements IText {
  public text: string;

  public class?: string[];

  constructor(text: IRequiredText) {
    this.text = text.text;
    this.class = text.class;
  }
}
