import {
  Component,
  input,
  ChangeDetectionStrategy,
  InputSignal,
  computed,
  Signal,
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

  public readonly secondaryButton: InputSignal<IButton | undefined> =
    input<IButton>();

  public readonly primaryButton: InputSignal<IButton | undefined> =
    input<IButton>();

  private readonly _secondaryButtonComputed: Signal<IButton | undefined> =
    computed(() => {
      const secondaryButtonSignal = this.secondaryButton();
      return secondaryButtonSignal && secondaryButtonSignal.text
        ? ({
            ...secondaryButtonSignal,
            class: ['btn', 'btn-secondary'],
          } as IButton)
        : undefined;
    });

  private readonly _primaryButtonComputed: Signal<IButton | undefined> =
    computed(() => {
      const primaryButtonSignal = this.primaryButton();
      return primaryButtonSignal && primaryButtonSignal.text
        ? ({
            ...primaryButtonSignal,
            class: ['btn', 'btn-primary'],
          } as IButton)
        : undefined;
    });

  protected get m_secondaryButton(): IButton | undefined {
    return this._secondaryButtonComputed();
  }

  protected get m_primaryButton(): IButton | undefined {
    return this._primaryButtonComputed();
  }
}
