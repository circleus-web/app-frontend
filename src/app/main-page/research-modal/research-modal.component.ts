import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-research-modal',
  standalone: true,
  templateUrl: './research-modal.component.html',
  styleUrl: './research-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModalComponent],
})
export class ResearchModalComponent {}
