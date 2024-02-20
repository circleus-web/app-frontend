import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IComboboxWithLabel } from './icombobox-with-label';

interface IRequiredComboboxWithLabel {
  form: FormControl;
  comboboxName: string;
  comboboxTitle: string;
  comboboxOptions: string[];
  class?: string[];
  defaultValue?: string;
}

export class ComboboxWithLabel implements IComboboxWithLabel {
  public form: FormControl;

  public comboboxName: string;

  public comboboxTitle: string;

  public comboboxOptions: string[];

  public class: string[] = [];

  public defaultValue?: string;

  constructor(requiredComboboxWithLabel: IRequiredComboboxWithLabel) {
    this.form = requiredComboboxWithLabel.form;
    this.comboboxName = requiredComboboxWithLabel.comboboxName;
    this.comboboxTitle = requiredComboboxWithLabel.comboboxTitle;
    this.comboboxOptions = requiredComboboxWithLabel.comboboxOptions;
    this.class = requiredComboboxWithLabel.class || [];
    this.defaultValue = requiredComboboxWithLabel.defaultValue;
  }

  public getValueChanges(): Observable<string> | undefined {
    return this.form.valueChanges;
  }
}
