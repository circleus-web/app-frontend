import { IToggle } from './itoggle';

interface IRequiredToggle {
  name: string;
  checked?: boolean;
  inversed?: boolean;
}

export class Toggle implements IToggle {
  public name: string;

  public checked: boolean;

  public inversed: boolean;

  constructor(toggle: IRequiredToggle) {
    this.name = toggle.name;
    this.checked = !!toggle.checked;
    this.inversed = !!toggle.inversed;
  }

  public get value(): boolean {
    return this.checked !== this.inversed;
  }
}
