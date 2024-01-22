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

  private _disabled?: boolean;

  private _getDisabled?: () => boolean;

  public click?: () => void;

  public routerLink?: string[];

  constructor(button: IRequiredButtton) {
    this.text = button.text;
    this.class = button.class;
    this.click = button.click;
    this.routerLink = button.routerLink;
    if (typeof button.disabled === 'boolean') {
      this._disabled = button.disabled;
    } else {
      this._getDisabled = button.disabled;
    }
  }

  public get disabled(): boolean {
    return this._getDisabled?.call(this) || this._disabled || false;
  }

  public set disabled(value: boolean | (() => boolean)) {
    if (typeof value === 'boolean') {
      this._disabled = value;
      this._getDisabled = undefined;
    } else {
      this._getDisabled = value;
    }
  }
}
