import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { IButton } from './ibutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) button!: IButton;

  @Input() buttonStyle?: { [key: string]: string };

  constructor(private router: Router) {}

  protected click(): void {
    this.button.click?.call(this.button);
    if (this.button.routerLink) this.router.navigate(this.button.routerLink);
  }
}
