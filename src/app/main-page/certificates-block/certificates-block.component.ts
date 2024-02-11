import { Component, Input } from '@angular/core';

import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { ICertificate } from './icertificate';

@Component({
  selector: 'app-certificates-block',
  standalone: true,
  templateUrl: './certificates-block.component.html',
  styleUrls: ['./certificates-block.component.scss', '../main-page.component.scss'],
  imports: [CvBlockAppearenceComponent, BadgeComponent],
})
export class CertificatesBlockComponent {
  @Input({ required: true }) certificates!: ICertificate[];
}
