import { InputWithRadioButtonAndLabel } from '../../shared/input/input-with-radio-button-and-label/input-with-radio-button-and-label';
import { FormItems } from '../form-array/form-items';
import { IFormInputWithRadio } from './iform-input-with-radio';

export class FormInputWithRadio
  extends InputWithRadioButtonAndLabel
  implements IFormInputWithRadio {
  type: FormItems = FormItems.FORM_INPUT_WITH_RADIO;
}
