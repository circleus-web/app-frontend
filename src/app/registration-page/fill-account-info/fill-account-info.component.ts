import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fill-account-info',
  standalone: true,
  templateUrl: './fill-account-info.component.html',
  styles: ['@import "white-form";'],
  imports: [RouterModule],
})
export class FillAccountInfoComponent {}
