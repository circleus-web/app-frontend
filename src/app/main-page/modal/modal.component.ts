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

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ModalComponent {
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

  private _activeOption?: WritableSignal<string>;

  protected get m_activeOption(): WritableSignal<string> {
    return (
      this._activeOption ??
      (computed(() => {
        const firstMenyValue: string | undefined = Object.keys(this.menyValues())
          ? Object.keys(this.menyValues())[0]
          : undefined;
        return firstMenyValue ? firstMenyValue : '';
      }) as WritableSignal<string>)
    );
  }

  protected m_changeActiveOption(option: string): void {
    if (this._activeOption) {
      this._activeOption.set(option);
    } else {
      this._activeOption = signal(option);
    }
  }
}
