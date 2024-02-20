import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  InputSignalWithTransform,
  input,
} from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { IButton } from '../../../shared/button/ibutton';

@Component({
  selector: 'app-form-footer',
  standalone: true,
  templateUrl: './form-footer.component.html',
  styleUrl: './form-footer.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFooterComponent {
  public readonly title: InputSignal<string | undefined> = input<string>();

  public readonly subtitle: InputSignal<string | undefined> = input<string>();

  private _secondaryButtonTransform(value: IButton | undefined): IButton | undefined {
    return value && value.text ? { ...value, class: ['btn', 'btn-secondary-gray'] } : undefined;
  }

  private _primaryButtontransform(value: IButton | undefined): IButton | undefined {
    return value && value.text ? { ...value, class: ['btn', 'btn-primary'] } : undefined;
  }

  public readonly secondaryButton: InputSignalWithTransform<
    IButton | undefined,
    IButton | undefined
  > = input<IButton | undefined, IButton | undefined>(undefined, {
    transform: this._secondaryButtonTransform,
  });

  public readonly primaryButton: InputSignalWithTransform<
    IButton | undefined,
    IButton | undefined
  > = input<IButton | undefined, IButton | undefined>(undefined, {
    transform: this._primaryButtontransform,
  });
}
