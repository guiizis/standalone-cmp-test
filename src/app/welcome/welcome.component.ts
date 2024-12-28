import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-welcome',
  imports: [DetailsComponent],
  templateUrl: './welcome.component.html',
  standalone: true
})
export class WelcomeComponent {}
