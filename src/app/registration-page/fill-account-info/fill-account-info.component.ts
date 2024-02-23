import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { FormArrayProvider } from '../../custom-form-generator/form-array/form-array-provider.service';
import { IFormArrayWithDescriptions } from '../../custom-form-generator/form-array/iform-array-with-descriptions';
import { HeaderComponent } from '../../header/header.component';
import { Button } from '../../shared/button/button';
import { IButton } from '../../shared/button/ibutton';
import { RegistrationFormArrayProviderService } from '../registration-form-array-provider.service';

import { FormFooterComponent } from './form-footer/form-footer.component';

interface FormFooterContents {
  title: string;
  subtitle: string;
  secondaryButton?: IButton;
  primaryButton?: IButton;
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
  imports: [RouterModule, HeaderComponent, FormFooterComponent, CustomFormGeneratorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillAccountInfoComponent {
  private readonly _footerButtons: { [key: string]: IButton } = {
    next: new Button({
      text: 'Далее',
      click: () => {
        console.log('next of', this.m_formArrayWithDescriptions.currentStep);
        this.m_formArrayWithDescriptions.nextStep();
        console.log('is', this.m_formArrayWithDescriptions.currentStep);
      },
    }),
    previous: new Button({
      text: 'Назад',
      click: () => {
        this.m_formArrayWithDescriptions.previousStep();
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
    switch (this.m_formArrayWithDescriptions.currentStep()) {
      case 0:
        return {
          title: 'Шаг 1',
          subtitle: 'Основная информация',
          secondaryButton: Object.assign({}, undefined),
          primaryButton: Object.assign({}, this._footerButtons['next']),
        };
      case 1:
        return {
          title: 'Шаг 2',
          subtitle: 'Специальность',
          secondaryButton: Object.assign({}, this._footerButtons['previous']),
          primaryButton: Object.assign({}, this._footerButtons['submit']),
        };
      default:
        return {
          title: '',
          subtitle: '',
          secondaryButton: Object.assign({}, undefined),
          primaryButton: Object.assign({}, this._footerButtons['next']),
        };
    }
  }

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions;

  private _formArrayProvider = inject(RegistrationFormArrayProviderService);

  constructor() {
    this.m_formArrayWithDescriptions = this._formArrayProvider.getFormArray('user_info');
  }

  private _logFormsContent() {
    console.log(JSON.stringify(this._formArrayProvider.getFormArray('user_info').getActiveFormContent()));
  }
}
