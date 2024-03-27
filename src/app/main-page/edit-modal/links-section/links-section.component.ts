import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-links-section',
  standalone: true,
  imports: [],
  templateUrl: './links-section.component.html',
  styleUrl: './links-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksSectionComponent {}
