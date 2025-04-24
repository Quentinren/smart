import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarItems = [
    { name: 'Info Vigilance', route: '/info-vigilance', icon: 'warning' },
    { name: 'Programme Travaux', route: '/programme-travaux', icon: 'build' },
    { name: 'Capacités', route: '/capacites', icon: 'speed' },
    { name: 'Flux', route: '/flux', icon: 'trending_up' },
    { name: 'Quantités Aval', route: '/quantites-aval', icon: 'bar_chart' },
    { name: 'Équilibrage', route: '/equilibrage', icon: 'balance' },
    { name: 'Opérateurs Connectés', route: '/operateurs-connectes', icon: 'people' },
    { name: 'Flexibilité IntraJ', route: '/flexibilite-intraj', icon: 'schedule' },
    { name: 'Tarifs', route: '/tarifs', icon: 'euro' }
  ];
}