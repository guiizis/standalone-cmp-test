import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnalyticsService } from './shared/analytics.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [WelcomeComponent],
})
export class AppComponent {}
