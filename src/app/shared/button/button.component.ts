import { Component, input } from '@angular/core';
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
  button = input.required<IButton>();

  buttonStyle = input<
  | {
    [key: string]: string;
  }
  | undefined
  >();

  constructor(private router: Router) {}

  protected click(): void {
    this.button().click?.call(this.button());
    const routerLink: string[] | undefined = this.button().routerLink;
    if (routerLink) this.router.navigate(routerLink);
  }
}
