import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, TemplateRef } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { ModalComponent } from '../modal/modal.component';
import { IInput } from '../../shared/input/input/iinput';
import { Input } from '../../shared/input/input/input';
import { FormControl } from '@angular/forms';
import { InputComponent } from '../../shared/input/input/input.component';

@Component({
  selector: 'app-research-modal',
  standalone: true,
  templateUrl: './research-modal.component.html',
  styleUrl: './research-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModalComponent, ButtonComponent, InputComponent],
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
}
