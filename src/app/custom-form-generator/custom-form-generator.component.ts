import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IFormArrayWithDescriptions } from '../shared/form-array/iform-array-with-descriptions';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './custom-form-generator.component.html',
  styleUrl: './custom-form-generator.component.scss',
})
export class CustomFormGeneratorComponent implements OnInit, OnDestroy {
  @Input({ required: true }) forms!: IFormArrayWithDescriptions;

  @Input() inputStyle?: { [key: string]: string };

  @Input() buttonContainerStyle?: { [key: string]: string };

  @Input() buttonStyle?: { [key: string]: string };

  ngOnInit(): void {
    this.forms.onCreate?.call(this.forms);
  }

  ngOnDestroy(): void {
    this.forms.onDestroy?.call(this.forms);
  }
}
