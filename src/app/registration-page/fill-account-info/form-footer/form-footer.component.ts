import { Component, Input, OnChanges, OnInit } from '@angular/core';

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
export class FormFooterComponent implements OnInit, OnChanges {
  @Input() title?: string;

  @Input() subtitle?: string;

  @Input() secondaryButton?: IButton;

  @Input() primaryButton?: IButton;

  protected m_secondaryButton?: IButton;

  protected m_primaryButton?: IButton;


  private _prepareButtons() {
    if (this.secondaryButton)
      this.m_secondaryButton = new Button({
        text: this.secondaryButton.text,
        class: ['btn', 'btn-secondary'],
        routerLink: this.secondaryButton.routerLink,
        click: this.secondaryButton.click,
      });

    if (this.primaryButton)
      this.m_primaryButton = new Button({
        text: this.primaryButton.text,
        class: ['btn', 'btn-primary'],
        routerLink: this.primaryButton.routerLink,
        click: this.primaryButton.click,
      });
  }

  ngOnInit() {
    this._prepareButtons();
  }

  ngOnChanges() {
    this._prepareButtons();
  }
}
