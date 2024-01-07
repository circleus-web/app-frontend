import { FormGroup } from '@angular/forms';

export abstract class FormProvider {
  public abstract getForm(): FormGroup;
}
