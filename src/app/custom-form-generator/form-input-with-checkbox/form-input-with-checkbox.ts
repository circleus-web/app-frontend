import { InputWithCheckboxAndLabel } from '../../shared/input/input-with-checkbox-and-label/input-with-checkbox-and-label';
import { FormItems } from '../form-array/form-items';
import { IFormInputWithCheckbox } from './iform-input-with-checkbox';

export class FormInputWithCheckbox
  extends InputWithCheckboxAndLabel
  implements IFormInputWithCheckbox
{
  type: FormItems = FormItems.FORM_INPUT_WITH_RADIO;
}
