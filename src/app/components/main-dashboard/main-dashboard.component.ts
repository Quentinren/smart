import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VigilanceInfoComponent } from '../vigilance-info/vigilance-info.component';
import { MapDisplayComponent } from '../map-display/map-display.component';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    VigilanceInfoComponent,
    MapDisplayComponent,
    ActionButtonsComponent
  ]
})
export class MainDashboardComponent {
  currentDate = new Date();
  lastUpdate = '24/04/2025 16:06';
  
  constructor(private router: Router) {}
  
  get currentSection(): string {
    const url = this.router.url;
    if (url === '/') return 'Info Vigilance';
    
    // Extract the section name from URL and format it
    const section = url.replace('/', '').split('-').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    
    return section;
  }
}