import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-languages-section',
  standalone: true,
  imports: [],
  templateUrl: './languages-section.component.html',
  styleUrl: './languages-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesSectionComponent {}
