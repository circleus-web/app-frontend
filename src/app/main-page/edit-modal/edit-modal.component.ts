import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModalComponent, ButtonComponent],
})
export class EditModalComponent {
  @Output() modalHide: EventEmitter<void> = new EventEmitter();

  protected m_editModalHide(): void {
    this.modalHide.emit();
  }
}
