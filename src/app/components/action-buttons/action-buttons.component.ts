import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface ActionButton {
  icon: string;
  label: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class ActionButtonsComponent {
  actionButtons: ActionButton[] = [
    { 
      icon: 'warning', 
      label: 'Déséquilibre fin de journée', 
      color: 'accent',
      route: '/equilibrage/position-desequilibre-final'
    },
    { 
      icon: 'info', 
      label: 'SEC projeté', 
      color: 'primary',
      route: '/equilibrage/stock-conduite-projete'
    },
    { 
      icon: 'map', 
      label: 'Référentiel des limites', 
      color: 'warn',
      route: '/info-vigilance'
    },
    { 
      icon: 'trending_up', 
      label: 'Spread localisé', 
      color: 'accent',
      route: '/info-vigilance'
    }
  ];
}