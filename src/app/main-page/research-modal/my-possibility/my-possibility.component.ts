import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

import { Button } from '../../../shared/button/button';
import { ButtonComponent } from '../../../shared/button/button.component';
import { IButton } from '../../../shared/button/ibutton';

import { BackgroundComponent } from './background/background.component';

enum Steps {
  Error = -1,
  WaitingToStart = 0,
  Calculating = 1,
  Finished = 2,
}

interface ISalaryPrediction {
  amount: string[];
  percentRate: number;
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

    setTimeout(() => {
      this.m_currentStep.set(Steps.Finished);
    }, 3000);
  }

  protected m_calculateButton: IButton = new Button({
    text: 'Рассчитать ЗП',
    class: ['btn', 'btn-primary'],
    click: this.m_calculate.bind(this),
  });

  protected m_predictedSalaryProbabilitiesList: ISalaryPrediction[] = [
    {
      amount: ['180К', '200К'],
      percentRate: 50,
    },
    {
      amount: ['160К', '180К'],
      percentRate: 30,
    },
    {
      amount: ['200К', '220К'],
      percentRate: 20,
    },
  ];

  protected m_maxPercentRate: Signal<number> = computed<number>(() => {
    return Math.max(...this.m_predictedSalaryProbabilitiesList.map((item) => item.percentRate));
  });
}
