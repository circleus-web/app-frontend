import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';

import { EmploymentTypeOptionComponent } from './employment-type-option/employment-type-option.component';

enum States {
  EMPTY = 0,
  SELECTING = 1,
}

@Component({
  selector: 'app-employment-type-section',
  standalone: true,
  templateUrl: './employment-type-section.component.html',
  styleUrl: './employment-type-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, EmploymentTypeOptionComponent],
})
export class EmploymentTypeSectionComponent {
  protected m_States = States;

  protected m_selectedOptions: WritableSignal<string[]> = signal([]);

  protected m_currentState: WritableSignal<States> = signal(States.EMPTY);

  protected m_changeState(newState: States): void {
    this.m_currentState.set(newState);
  }

  protected m_exitEmptyState = (): void => {
    this.m_changeState(States.SELECTING);
  };

  private _changeChildActive(child: string, newStatus: boolean) {
    const selectedOptions: string[] = this.m_selectedOptions();
    if (newStatus) {
      if (typeof selectedOptions.find((value: string) => value === child) === 'undefined') {
        this.m_selectedOptions.set([...selectedOptions, child]);
      }
    } else {
      if (typeof selectedOptions.find((value: string) => value === child) !== 'undefined') {
        const newSelectedOptions: string[] = selectedOptions.filter(
          (value: string) => value !== child,
        );
        this.m_selectedOptions.set(newSelectedOptions);
      }
    }
    console.log(this.m_selectedOptions());
  }

  protected m_changeRemoteStatus(value: boolean) {
    this._changeChildActive('remote', value);
  }

  protected m_changeOfflineStatus(value: boolean) {
    this._changeChildActive('offline', value);
  }

  protected m_changeHybridStatus(value: boolean) {
    this._changeChildActive('hybrid', value);
  }
}
