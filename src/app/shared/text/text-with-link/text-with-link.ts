import { ITextWithLink } from './itext-with-link';

interface IRequiredTextWithLink {
  link: string;
  routerLink?: string[];
  textBeforeLink?: string;
  textAfterLink?: string;
  class?: string[];
}

export class TextWithLink implements ITextWithLink {
  public link: string;

  public routerLink?: string[];

  public textBeforeLink?: string;

  public textAfterLink?: string;

  public class?: string[];

  constructor(text: IRequiredTextWithLink) {
    this.link = text.link;
    this.routerLink = text.routerLink;
    this.textBeforeLink = text.textBeforeLink;
    this.textAfterLink = text.textAfterLink;
    this.class = text.class;
  }
}
