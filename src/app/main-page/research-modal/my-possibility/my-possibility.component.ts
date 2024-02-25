import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { IButton } from '../../../shared/button/ibutton';
import { Button } from '../../../shared/button/button';
import { BackgroundComponent } from './background/background.component';

enum Steps {
  Error = -1,
  WaitingToStart = 0,
  Calculating = 1,
  Calculated = 2,
}

@Component({
  selector: 'app-my-possibility',
  standalone: true,
  templateUrl: './my-possibility.component.html',
  styleUrl: './my-possibility.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, BackgroundComponent],
})
export class MyPossibilityComponent {
  Steps = Steps;

  protected m_currentStep: WritableSignal<Steps> = signal(Steps.WaitingToStart);

  protected m_calculate(): void {
    this.m_currentStep.set(Steps.Calculating);
    console.log('calculate');
  }

  protected m_calculateButton: IButton = new Button({
    text: 'Рассчитать ЗП',
    class: ['btn', 'btn-primary'],
    click: this.m_calculate.bind(this),
  });
}
