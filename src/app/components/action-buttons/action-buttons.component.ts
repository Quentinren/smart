import { Component } from '@angular/core';

interface ActionButton {
  icon: string;
  label: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
  actionButtons: ActionButton[] = [
    { 
      icon: 'warning', 
      label: 'Déséquilibre fin de journée', 
      color: 'accent',
      route: '/desequilibre'
    },
    { 
      icon: 'info', 
      label: 'SEC projeté', 
      color: 'primary',
      route: '/sec-projete'
    },
    { 
      icon: 'map', 
      label: 'Référentiel des limites', 
      color: 'warn',
      route: '/referentiel-limites'
    },
    { 
      icon: 'trending_up', 
      label: 'Spread localisé', 
      color: 'accent',
      route: '/spread-localise'
    }
  ];
}