import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { BehaviorSubject } from 'rxjs';

interface RegionData {
  name: string;
  indicateurQPositif: boolean;
  flexibilitePartielle: boolean;
  indicateurQNegatif: boolean;
}

@Component({
  selector: 'app-flexibilite-intraj',
  templateUrl: './flexibilite-intraj.component.html',
  styleUrls: ['./flexibilite-intraj.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule
  ]
})
export class FlexibiliteIntrajComponent implements OnInit {
  currentDate = new Date();
  lastUpdate = new Date().toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Données des régions
  regions: RegionData[] = [
    {
      name: 'Nord',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    },
    {
      name: 'Île-de-France',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    },
    {
      name: 'Lorraine',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    },
    {
      name: 'Bretagne',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    },
    {
      name: 'Guyenne',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    },
    {
      name: 'Provence',
      indicateurQPositif: true,
      flexibilitePartielle: true,
      indicateurQNegatif: true
    }
  ];
  
  // Tracking current view (table or map)
  viewMode = new BehaviorSubject<'table' | 'map'>('table');
  
  constructor() {}
  
  ngOnInit(): void {
    // Initialisation du composant
  }
  
  toggleView(mode: 'table' | 'map'): void {
    this.viewMode.next(mode);
  }
  
  // Fonction pour rafraîchir les données
  refreshData(): void {
    this.lastUpdate = new Date().toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    // Ici on pourrait appeler un service pour récupérer de nouvelles données
  }
}