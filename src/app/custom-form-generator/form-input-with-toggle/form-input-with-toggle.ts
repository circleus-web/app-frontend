import { InputWithToggleAndLabel } from '../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label';
import { FormItems } from '../form-array/form-items';
import { IFormInputWithToggle } from './iform-input-with-toggle';

export class FormInputWithToggle
  extends InputWithToggleAndLabel
  implements IFormInputWithToggle
{
  type: FormItems = FormItems.FORM_INPUT_WITH_TOGGLE;
}
