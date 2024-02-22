import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  Signal,
  TemplateRef,
  WritableSignal,
  computed,
  input,
  signal,
} from '@angular/core';

interface IMenyOption {
  iconSrc: string;
  title: string;
  templateValue: TemplateRef<Element>;
}

interface IMenyOptionWithName extends IMenyOption {
  name: string;
}

interface IModalInformation {
  title: string;
  iconSrc: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ModalComponent {
  modalInformation: InputSignal<IModalInformation> = input.required<IModalInformation>();

  menyValues: InputSignal<{ [key: string]: IMenyOption }> = input<{ [key: string]: IMenyOption }>(
    {},
  );

  protected m_iterableMenyValues: Signal<IMenyOptionWithName[]> = computed<IMenyOptionWithName[]>(
    () => {
      const menyValues = this.menyValues();
      const result: IMenyOptionWithName[] = [];

      for (const key of Object.keys(menyValues)) {
        result.push({
          name: key,
          ...menyValues[key],
        });
      }

      return result;
    },
  );

  private _activeOptionName?: WritableSignal<string>;

  protected get m_activeOptionName(): WritableSignal<string> {
    return (
      this._activeOptionName ??
      (computed(() => {
        const firstMenyValue: string | undefined = Object.keys(this.menyValues())
          ? Object.keys(this.menyValues())[0]
          : undefined;
        return firstMenyValue ? firstMenyValue : '';
      }) as WritableSignal<string>)
    );
  }

  protected m_changeActiveOption(option: string): void {
    if (this._activeOptionName) {
      this._activeOptionName.set(option);
    } else {
      this._activeOptionName = signal(option);
    }
  }
}
