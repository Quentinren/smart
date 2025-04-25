import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatDividerModule, RouterModule]
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