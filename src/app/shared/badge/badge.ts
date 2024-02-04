import { IBadge } from './ibadge';

interface IRequiredBadge {
  text: string;
  class?: string[];
}

export class Badge implements IBadge {
  public text: string;

  public class: string[];

  constructor(badge: IRequiredBadge) {
    this.text = badge.text;
    this.class = badge.class ?? [];
  }
}
