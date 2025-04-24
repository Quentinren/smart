import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
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