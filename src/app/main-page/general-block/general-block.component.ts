import { Component, Input, OnInit } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';

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

interface IBadge {
  text: string;
  color: string;
}

@Component({
  selector: 'app-general-block',
  standalone: true,
  templateUrl: './general-block.component.html',
  styleUrl: './general-block.component.scss',
  imports: [BadgeComponent],
})
export class GeneralBlockComponent implements OnInit {
  protected readonly m_possibleStatuses: { [key: string]: IBadge } = {
    'Ищу работу': {
      text: 'Ищу работу',
      color: 'orange',
    },
  };

  @Input({ required: true }) status!: string;

  protected m_activeStatus?: IBadge;

  @Input({ required: true }) personInformation!: IPersonInformation;

  @Input({ required: true })
  specializationInformation!: ISpecializationInformation;

  @Input({ required: true }) contacts!: IContacts;

  ngOnInit(): void {
    this.m_activeStatus = this.m_possibleStatuses[this.status] ?? undefined;
  }
}
