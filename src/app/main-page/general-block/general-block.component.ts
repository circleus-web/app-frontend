import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { IBadge } from '../../shared/badge/ibadge';

interface IPersonInformation {
  name: string;
  age: string;
  location: string;
}

interface ISpecializationInformation {
  name: string;
  graid: string;
}

interface IContacts {
  email: string;
  phone: string;
}

@Component({
  selector: 'app-general-block',
  standalone: true,
  templateUrl: './general-block.component.html',
  styleUrl: './general-block.component.scss',
  imports: [CommonModule, BadgeComponent],
})
export class GeneralBlockComponent {
  @Input({ required: true }) badge!: IBadge;

  @Input({ required: true }) personInformation!: IPersonInformation;

  @Input({ required: true })
    specializationInformation!: ISpecializationInformation;

  @Input({ required: true }) contacts!: IContacts;

  @Input() classes?: string[] = [];
}
