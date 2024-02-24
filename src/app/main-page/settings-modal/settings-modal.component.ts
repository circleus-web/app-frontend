import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { IInputWithLabel } from '../../shared/input/input-with-label/iinput-with-label';
import { InputWithLabel } from '../../shared/input/input-with-label/input-with-label';
import { InputWithLabelComponent } from '../../shared/input/input-with-label/input-with-label.component';
import { IInputWithToggleAndLabel } from '../../shared/input/input-with-toggle-and-label/iinput-with-toggle-and-label';
import { InputWithToggleAndLabel } from '../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label';
import { InputWithToggleAndLabelComponent } from '../../shared/input/input-with-toggle-and-label/input-with-toggle-and-label.component';
import { Input } from '../../shared/input/input/input';
import { IToggle } from '../../shared/toggle-button/itoggle';
import { Toggle } from '../../shared/toggle-button/toggle';
import { ToggleButtonComponent } from '../../shared/toggle-button/toggle-button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-settings-modal',
  standalone: true,
  templateUrl: './settings-modal.component.html',
  styleUrl: './settings-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ModalComponent,
    ButtonComponent,
    InputWithLabelComponent,
    ToggleButtonComponent,
    InputWithToggleAndLabelComponent,
  ],
})
export class SettingsModalComponent {
  @Output() modalHide: EventEmitter<void> = new EventEmitter<void>();

  m_settingsModalHide(): void {
    this.modalHide.emit();
  }

  protected m_lastNameInput: IInputWithLabel = new InputWithLabel({
    title: 'Фамилия',
    input: new Input({
      formControl: new FormControl(),
      name: 'lastName',
      placeholder: 'Журавлев',
    }),
  });

  protected m_firstNameInput: IInputWithLabel = new InputWithLabel({
    title: 'Имя',
    input: new Input({
      formControl: new FormControl(),
      name: 'firstName',
      placeholder: 'Александр',
    }),
  });

  protected m_dateOfBirthInput: IInputWithToggleAndLabel = new InputWithToggleAndLabel({
    title: 'Дата рождения',
    input: new Input({
      formControl: new FormControl(),
      name: 'dateOfBirth',
      placeholder: '01.01.2000',
    }),
    toggle: new Toggle({
      name: 'dateOfBirthShow',
      inversed: true,
    }),
    toggleTitle: 'Не показывать в профиле',
  });

  protected m_locationInput: IInputWithLabel = new InputWithLabel({
    title: 'Местоположение',
    input: new Input({
      formControl: new FormControl(),
      name: 'location',
      placeholder: 'Москва',
    }),
  });

  protected m_specialityInput: IInputWithLabel = new InputWithLabel({
    title: 'Специальность',
    input: new Input({
      formControl: new FormControl(),
      name: 'speciality',
      placeholder: 'Программист',
    }),
  });

  protected m_searchingForWorkToggle: IToggle = new Toggle({
    name: 'searchingForWork',
    checked: true,
  });
}
