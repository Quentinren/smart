import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MapDisplayComponent } from '../map-display/map-display.component';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';

interface Definition {
  title: string;
  description: string;
}

@Component({
  selector: 'app-vigilance-info',
  templateUrl: './vigilance-info.component.html',
  styleUrls: ['./vigilance-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MapDisplayComponent,
    ActionButtonsComponent
  ]
})
export class VigilanceInfoComponent {
  currentDate = new Date();
  lastUpdate = '25/04/2025 16:06';
  selectedPeriod: string = 'intra-j';
  showDefinitions = false;
  currentLang = 'fr';
  
  // For table and periods
  currentPeriodLimits: any[] = [];
  futureDates: Date[] = [];
  
  // Map titles
  mapTitles = {
    northSouth: 'CARTE DES LIMITES NORD>SUD ET EST>OUEST',
    southNorth: 'CARTE DES LIMITES SUD>NORD'
  };
  
  // Labels
  lastUpdateLabel = 'Dernier rafraîchissement';
  definitionsLabel = 'Définitions';
  
  // Definitions
  definitions: Definition[] = [
    {
      title: 'Surveillance active',
      description: 'Indique que la limite est sous surveillance active par les équipes.'
    },
    {
      title: 'Travaux à petit impact',
      description: 'Indique une maintenance avec un impact limité sur la capacité technique.'
    },
    {
      title: 'Maintenance programmée',
      description: 'Indique une maintenance planifiée qui peut affecter les capacités disponibles.'
    }
  ];
  
  constructor(private router: Router) {
    // Initialize future dates
    const today = new Date();
    for (let i = 1; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.futureDates.push(date);
    }
    
    // Initialize period data
    this.changePeriod('intra-j');
  }
  
  changePeriod(period: string): void {
    this.selectedPeriod = period;
    
    // Mock data for different periods
    if (period === 'intra-j') {
      this.currentPeriodLimits = [
        { id: 'NS1', checked: true, side: 'Nord-Sud', value: 100 },
        { id: 'NS2', checked: false, side: 'Nord-Sud', value: 120 },
        { id: 'NS3', checked: true, side: 'Est-Ouest', value: 85 },
        { id: 'SN1', checked: true, side: 'Sud-Nord', value: 90 }
      ];
    } else if (period === 'j-plus-1') {
      this.currentPeriodLimits = [
        { id: 'NS1', checked: true, side: 'Nord-Sud', hasWorks: true },
        { id: 'NS2', checked: false, side: 'Nord-Sud', hasWorks: false },
        { id: 'NS3', checked: true, side: 'Est-Ouest', hasWorks: false },
        { id: 'SN1', checked: true, side: 'Sud-Nord', hasWorks: true }
      ];
    } else {
      // J+2 à J+5
      this.currentPeriodLimits = [
        { 
          id: 'NS1', 
          side: 'Nord-Sud', 
          futureStatus: [
            { checked: true, hasWorks: true, planned: false },
            { checked: true, hasWorks: true, planned: false },
            { checked: true, hasWorks: false, planned: true },
            { checked: false, hasWorks: false, planned: true }
          ]
        },
        { 
          id: 'NS2', 
          side: 'Nord-Sud', 
          futureStatus: [
            { checked: false, hasWorks: false, planned: false },
            { checked: true, hasWorks: false, planned: false },
            { checked: true, hasWorks: true, planned: false },
            { checked: true, hasWorks: true, planned: false }
          ]
        },
        { 
          id: 'NS3', 
          side: 'Est-Ouest', 
          futureStatus: [
            { checked: true, hasWorks: false, planned: false },
            { checked: true, hasWorks: false, planned: false },
            { checked: false, hasWorks: false, planned: true },
            { checked: false, hasWorks: false, planned: true }
          ]
        }
      ];
    }
  }
  
  toggleDefinitions(): void {
    this.showDefinitions = !this.showDefinitions;
  }
  
  changeLanguage(lang: string): void {
    this.currentLang = lang;
    
    if (lang === 'fr') {
      this.lastUpdateLabel = 'Dernier rafraîchissement';
      this.definitionsLabel = 'Définitions';
      this.mapTitles = {
        northSouth: 'CARTE DES LIMITES NORD>SUD ET EST>OUEST',
        southNorth: 'CARTE DES LIMITES SUD>NORD'
      };
    } else if (lang === 'en') {
      this.lastUpdateLabel = 'Last Update';
      this.definitionsLabel = 'Definitions';
      this.mapTitles = {
        northSouth: 'NORTH>SOUTH AND EAST>WEST LIMITS MAP',
        southNorth: 'SOUTH>NORTH LIMITS MAP'
      };
    }
  }
  
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