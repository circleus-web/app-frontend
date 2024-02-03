import { Component, Input, OnInit } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { Button } from '../../../shared/button/button';
import { IButton } from '../../../shared/button/ibutton';

@Component({
  selector: 'app-form-footer',
  standalone: true,
  templateUrl: './form-footer.component.html',
  styleUrl: './form-footer.component.scss',
  imports: [ButtonComponent],
})
export class FormFooterComponent implements OnInit {
  @Input() formFooterTitle?: string;

  @Input() formFooterSubtitle?: string;

  @Input() secondaryButtonText?: string;

  @Input() primaryButtonText?: string;

  @Input() secondaryButtonRouterLink?: string[];

  @Input() primaryButtonRouterLink?: string[];

  protected m_secondaryButton?: IButton;

  protected m_primaryButton?: IButton;

  ngOnInit() {
    if (this.secondaryButtonText)
      this.m_secondaryButton = new Button({
        text: this.secondaryButtonText,
        class: ['btn', 'btn-secondary'],
        routerLink: this.secondaryButtonRouterLink,
      });

    if (this.primaryButtonText)
      this.m_primaryButton = new Button({
        text: this.primaryButtonText,
        class: ['btn', 'btn-primary'],
        routerLink: this.primaryButtonRouterLink,
      });
  }
}
