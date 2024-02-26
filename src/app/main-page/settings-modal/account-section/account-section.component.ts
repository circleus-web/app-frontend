import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { IInputWithLabel } from '../../../shared/input/input-with-label/iinput-with-label';
import { InputWithLabel } from '../../../shared/input/input-with-label/input-with-label';
import { InputWithLabelComponent } from '../../../shared/input/input-with-label/input-with-label.component';
import { IInputWithToggleAndLabel } from '../../../shared/input/input-with-toggle-and-label/iinput-with-toggle-and-label';
import { InputWithToggleAndLabel } from '../../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label';
import { InputWithToggleAndLabelComponent } from '../../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label.component';
import { Input } from '../../../shared/input/input/input';
import { IToggle } from '../../../shared/toggle-button/itoggle';
import { Toggle } from '../../../shared/toggle-button/toggle';
import { ToggleButtonComponent } from '../../../shared/toggle-button/toggle-button.component';

@Component({
  selector: 'app-account-section',
  standalone: true,
  templateUrl: './account-section.component.html',
  styleUrl: './account-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    InputWithToggleAndLabelComponent,
    ButtonComponent,
    ToggleButtonComponent,
    InputWithLabelComponent,
  ],
})
export class AccountSectionComponent {
  protected m_emailChanging: WritableSignal<boolean> = signal(false);

  protected m_emailActivateChanging(): void {
    this.m_emailChanging.set(true);
  }

  protected m_isPrivateToggle: IToggle = new Toggle({
    name: 'isPrivate',
    text: 'Закрытый аккаунт',
    supportingText: 'Другие пользователи не смогут просматривать ваш аккаунт',
  });

  protected m_phoneChangeInput: IInputWithToggleAndLabel = new InputWithToggleAndLabel({
    title: 'Номер телефона',
    input: new Input({
      formControl: new FormControl(),
      name: 'phone',
      placeholder: '+7 (999) 123-45-67',
    }),
    toggle: new Toggle({
      name: 'isPhonePublic',
      inversed: true,
    }),
    toggleTitle: 'Не показывать в профиле',
  });

  protected m_verificationCodeInput: IInputWithLabel = new InputWithLabel({
    title: 'Код верификации',
    input: new Input({
      formControl: new FormControl(),
      name: 'verificationCode',
      placeholder: 'aaaa-aaaa-aaaa-aaaa',
    }),
  });
}
