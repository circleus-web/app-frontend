import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-research-modal',
  standalone: true,
  templateUrl: './research-modal.component.html',
  styleUrl: './research-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModalComponent, ButtonComponent],
})
export class ResearchModalComponent {
  protected m_myPossibilityTemplate!: TemplateRef<Element>;

  protected m_allSpecialistsTemplate!: TemplateRef<Element>;
}
