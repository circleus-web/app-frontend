import { Component, Input } from '@angular/core';

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
  imports: [BadgeComponent],
})
export class GeneralBlockComponent {
  @Input({ required: true }) badge!: IBadge;

  @Input({ required: true }) personInformation!: IPersonInformation;

  @Input({ required: true }) specializationInformation!: ISpecializationInformation;

  @Input({ required: true }) contacts!: IContacts;
}
