import { IToggle } from './itoggle';

interface IRequiredToggle {
  name: string;
  checked?: boolean;
  inversed?: boolean;
  text?: string;
  supportingText?: string;
}

export class Toggle implements IToggle {
  public name: string;

  public checked: boolean;

  public inversed: boolean;

  public text?: string;

  public supportingText?: string;

  constructor(toggle: IRequiredToggle) {
    this.name = toggle.name;
    this.checked = !!toggle.checked;
    this.inversed = !!toggle.inversed;
    this.text = toggle.text;
    this.supportingText = toggle.supportingText;
  }

  public get value(): boolean {
    return this.checked !== this.inversed;
  }
}
