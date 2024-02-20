import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../header/header.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { FormArrayProvider } from '../../custom-form-generator/form-array/form-array-provider.service';
import { RegistrationFormArrayProviderService } from '../registration-form-array-provider.service';
import { IFormArrayWithDescriptions } from '../../custom-form-generator/form-array/iform-array-with-descriptions';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { Button } from '../../shared/button/button';
import { IButton } from '../../shared/button/ibutton';

enum FormSteps {
  FirstStep = 0,
  GeneralInfo = 1,
  JobInfo = 2,
  LastStep = 3,
}

interface FormFooterContents {
  title: string;
  subtitle: string;
  secondaryButton?: IButton;
  primaryButton?: IButton;
}

class InvalidStepError extends Error {
  constructor(step: FormSteps) {
    super(`Invalid step ${step}`);
  }
}

@Component({
  selector: 'app-fill-account-info',
  standalone: true,
  templateUrl: './fill-account-info.component.html',
  styles: ['@import "white-form";'],
  providers: [
    {
      provide: FormArrayProvider,
      useClass: RegistrationFormArrayProviderService,
    },
  ],
  imports: [
    RouterModule,
    HeaderComponent,
    FormFooterComponent,
    CustomFormGeneratorComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillAccountInfoComponent {
  private p_currentStep: FormSteps = FormSteps.GeneralInfo;

  private set _currentStep(value: FormSteps) {
    this.p_currentStep = value;
    switch (value) {
      case FormSteps.GeneralInfo:
        this.m_formArrayWithDescriptions =
          this._formArrayProvider.getFormArray('general_info');
        break;
      case FormSteps.JobInfo:
        this.m_formArrayWithDescriptions =
          this._formArrayProvider.getFormArray('job_info');
        break;
      default:
        throw new InvalidStepError(value);
    }
  }

  private get _currentStep(): FormSteps {
    return this.p_currentStep;
  }

  private readonly _footerButtons: { [key: string]: IButton } = {
    next: new Button({
      text: 'Далее',
      click: () => {
        this._nextPage();
      },
    }),
    previous: new Button({
      text: 'Назад',
      click: () => {
        this._previousPage();
      },
    }),
    submit: new Button({
      text: 'Начать работу',
      click: () => {
        this._logFormsContent();
      },
    }),
  };

  protected get m_footerContent(): FormFooterContents {
    switch (this._currentStep) {
      case FormSteps.GeneralInfo:
        return {
          title: 'Шаг 1',
          subtitle: 'Основная информация',
          secondaryButton: Object.assign({}, undefined),
          primaryButton: Object.assign({}, this._footerButtons['next']),
        };
      case FormSteps.JobInfo:
        return {
          title: 'Шаг 2',
          subtitle: 'Специальность',
          secondaryButton: Object.assign({}, this._footerButtons['previous']),
          primaryButton: Object.assign({}, this._footerButtons['submit']),
        };
      default:
        throw new InvalidStepError(this._currentStep);
    }
  }

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions;

  constructor(
    private _formArrayProvider: RegistrationFormArrayProviderService,
  ) {
    this.m_formArrayWithDescriptions =
      _formArrayProvider.getFormArray('general_info');
  }

  private _nextPage() {
    if (this._currentStep < FormSteps.LastStep - 1) {
      this._currentStep += 1;
    }
  }

  private _previousPage() {
    if (this._currentStep > FormSteps.FirstStep + 1) {
      this._currentStep -= 1;
    }
  }

  private _getAboutFormsContent(): object {
    return {
      ...this._formArrayProvider
        .getFormArray('general_info')
        .getActiveFormContent(),
      ...this._formArrayProvider
        .getFormArray('job_info')
        .getActiveFormContent(),
    };
  }

  private _logFormsContent() {
    console.log(JSON.stringify(this._getAboutFormsContent()));
  }
}
