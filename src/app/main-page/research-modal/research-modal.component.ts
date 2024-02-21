import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-modal',
  standalone: true,
  templateUrl: './research-modal.component.html',
  styleUrl: './research-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModalComponent],
})
export class ResearchModalComponent {
  protected m_myPossibilityTemplate!: TemplateRef<Element>;

  protected m_allSpecialistsTemplate!: TemplateRef<Element>;
}
