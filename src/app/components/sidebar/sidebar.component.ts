import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SubmenuItem {
  name: string;
  route: string;
}

interface SidebarItem {
  name: string;
  route: string;
  icon: string;
  expanded?: boolean;
  submenu?: SubmenuItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatDividerModule, RouterModule]
})
export class SidebarComponent implements OnInit {
  activeRoute: string = '';
  
  sidebarItems: SidebarItem[] = [
    { 
      name: 'Info Vigilance', 
      route: '/info-vigilance', 
      icon: 'warning',
      submenu: [] 
    },
    { 
      name: 'Programme Travaux', 
      route: '/programme-travaux', 
      icon: 'build',
      submenu: [
        { name: 'Points CAM', route: '/programme-travaux/points-cam' },
        { name: 'Points non-CAM', route: '/programme-travaux/points-non-cam' },
        { name: 'Super Points', route: '/programme-travaux/super-points' },
        { name: 'Carte de restriction', route: '/programme-travaux/carte-restriction' }
      ] 
    },
    { 
      name: 'Capacités', 
      route: '/capacites', 
      icon: 'speed',
      submenu: [
        { name: 'Marché primaire', route: '/capacites/marche-primaire' },
        { name: 'Marché secondaire', route: '/capacites/marche-secondaire' },
        { name: 'Marché aval', route: '/capacites/marche-aval' }
      ] 
    },
    { 
      name: 'Flux', 
      route: '/flux', 
      icon: 'trending_up',
      submenu: [
        { name: 'Commerciaux', route: '/flux/commerciaux' },
        { name: 'Physiques', route: '/flux/physiques' },
        { name: 'Carte des quantités', route: '/flux/carte-quantites' }
      ] 
    },
    { 
      name: 'Quantités Aval', 
      route: '/quantites-aval', 
      icon: 'bar_chart',
      submenu: [
        { name: 'Consommations', route: '/quantites-aval/consommations' },
        { name: 'Production Biométhane', route: '/quantites-aval/production-biomethane' }
      ] 
    },
    { 
      name: 'Équilibrage', 
      route: '/equilibrage', 
      icon: 'balance',
      submenu: [
        { name: 'Déséquilibre de programme', route: '/equilibrage/desequilibre-programme' },
        { name: 'Soldes des déséquilibres', route: '/equilibrage/soldes-desequilibres' },
        { name: 'Bilan des E/S', route: '/equilibrage/bilan-es' },
        { name: 'Stock en conduite', route: '/equilibrage/stock-conduite' },
        { name: 'Stock en conduite projeté', route: '/equilibrage/stock-conduite-projete' },
        { name: 'Prévision des clients profilés', route: '/equilibrage/prevision-clients-profiles' },
        { name: 'Prix – depuis le 1er mai 2023', route: '/equilibrage/prix' },
        { name: 'Position de déséquilibre final', route: '/equilibrage/position-desequilibre-final' }
      ] 
    },
    { 
      name: 'Opérateurs Connectés', 
      route: '/operateurs-connectes', 
      icon: 'people',
      submenu: [
        { name: 'ELENGY', route: '/operateurs-connectes/elengy' },
        { name: 'Dunkerque LNG', route: '/operateurs-connectes/dunkerque-lng' },
        { name: 'TELSF', route: '/operateurs-connectes/telsf' },
        { name: 'Storengy', route: '/operateurs-connectes/storengy' }
      ] 
    },
    { 
      name: 'Flexibilité IntraJ', 
      route: '/flexibilite-intraj', 
      icon: 'schedule',
      submenu: [] 
    },
    { 
      name: 'Tarifs', 
      route: '/tarifs', 
      icon: 'euro',
      submenu: [] 
    }
  ];
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Initialize active route and expand the active menu item
    this.activeRoute = this.router.url;
    this.expandActiveMenu();
    
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.activeRoute = event.url;
      this.expandActiveMenu();
    });
  }
  
  toggleSubmenu(item: SidebarItem): void {
    item.expanded = !item.expanded;
    
    // Close other expanded menus if this one is being expanded
    if (item.expanded) {
      this.sidebarItems.forEach(i => {
        if (i !== item) {
          i.expanded = false;
        }
      });
    }
  }
  
  expandActiveMenu(): void {
    // Find and expand the menu that contains the active route
    this.sidebarItems.forEach(item => {
      if (this.activeRoute === item.route) {
        item.expanded = true;
      } else if (item.submenu && item.submenu.length > 0) {
        // Check if any submenu route matches the active route
        const hasActiveSubmenu = item.submenu.some(subItem => this.activeRoute === subItem.route);
        item.expanded = hasActiveSubmenu;
      }
    });
  }
  
  isSubmenuActive(item: SidebarItem): boolean {
    if (!item.submenu) return false;
    return item.submenu.some(subItem => this.activeRoute === subItem.route);
  }
}