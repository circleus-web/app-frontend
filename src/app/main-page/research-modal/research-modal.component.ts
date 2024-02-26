import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { IInput } from '../../shared/input/input/iinput';
import { Input } from '../../shared/input/input/input';
import { InputComponent } from '../../shared/input/input/input.component';
import { ModalComponent } from '../modal/modal.component';

import { MyPossibilityComponent } from './my-possibility/my-possibility.component';
import { IPossibility, SpecialityItemComponent } from './speciality-item/speciality-item.component';

interface ISpeciality {
  name: string;
  mostPossible: string;
  topPossible: IPossibility[];
}

@Component({
  selector: 'app-research-modal',
  standalone: true,
  templateUrl: './research-modal.component.html',
  styleUrl: './research-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ModalComponent,
    ButtonComponent,
    InputComponent,
    MyPossibilityComponent,
    SpecialityItemComponent,
  ],
})
export class ResearchModalComponent {
  protected m_myPossibilityTemplate!: TemplateRef<Element>;

  protected m_allSpecialistsTemplate!: TemplateRef<Element>;

  protected m_searchInput: IInput = new Input({
    formControl: new FormControl(''),
    name: 'search',
    placeholder: 'Поиск по специальности',
    icon: {
      src: 'assets/svg/research-modal/search.svg',
    },
  });

  @Output() researchModalHide = new EventEmitter<void>();

  protected m_researchModalHide(): void {
    this.researchModalHide.emit();
  }

  protected m_specialityMock: ISpeciality = {
    name: 'Product Designer',
    mostPossible: '100К',
    topPossible: [
      {
        amount: ['90К', '110К'],
        percentRate: 80,
      },
      {
        amount: ['70К', '90К'],
        percentRate: 15,
      },
      {
        amount: ['110К', '130К'],
        percentRate: 5,
      },
    ],
  };

  protected m_specialities: ISpeciality[] = [
    { ...this.m_specialityMock },
    { ...this.m_specialityMock, name: 'Product Manager' },
    { ...this.m_specialityMock, name: 'Frontend Developer' },
    { ...this.m_specialityMock, name: 'Backend Developer' },
    { ...this.m_specialityMock, name: 'Fullstack Developer' },
    { ...this.m_specialityMock, name: 'UX Designer' },
    { ...this.m_specialityMock, name: 'UI Designer' },
    { ...this.m_specialityMock, name: 'QA Engineer' },
  ];
}
