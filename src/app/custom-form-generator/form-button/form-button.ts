import { Button } from '../../shared/button/button';
import { FormItems } from '../form-array/form-items';

import { IFormButton } from './iform-button';

export class FormButton extends Button implements IFormButton {
  public type: FormItems = FormItems.FORM_BUTTON;

  public getContent(): object {
    return {};
  }
}
