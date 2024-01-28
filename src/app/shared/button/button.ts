import { IButton } from './ibutton';

interface IRequiredButtton {
  text: string;
  class?: string[];
  disabled?: boolean | (() => boolean);
  click?: () => void;
  routerLink?: string[];
}

export class Button implements IButton {
  public text: string;

  public class?: string[];

  private m_disabled?: boolean;

  private m_getDisabled?: () => boolean;

  public click?: () => void;

  public routerLink?: string[];

  constructor(button: IRequiredButtton) {
    this.text = button.text;
    this.class = button.class;
    this.click = button.click;
    this.routerLink = button.routerLink;
    if (typeof button.disabled === 'boolean') {
      this.m_disabled = button.disabled;
    } else {
      this.m_getDisabled = button.disabled;
    }
  }

  public get disabled(): boolean {
    return this.m_getDisabled?.call(this) || this.m_disabled || false;
  }

  public set disabled(value: boolean | (() => boolean)) {
    if (typeof value === 'boolean') {
      this.m_disabled = value;
      this.m_getDisabled = undefined;
    } else {
      this.m_getDisabled = value;
    }
  }
}
