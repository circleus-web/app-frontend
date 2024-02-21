import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, InputSignal, input } from '@angular/core';

interface INavigationElement {
  iconSrc: string;
  text: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ModalComponent {
  navigationList: InputSignal<INavigationElement[]> = input<INavigationElement[]>([]);
}
