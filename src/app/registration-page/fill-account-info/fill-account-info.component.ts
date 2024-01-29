import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-fill-account-info',
  standalone: true,
  templateUrl: './fill-account-info.component.html',
  styles: ['@import "white-form";'],
  imports: [RouterModule, HeaderComponent],
})
export class FillAccountInfoComponent {}
