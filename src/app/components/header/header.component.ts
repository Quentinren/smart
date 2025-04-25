import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SubmenuItem {
  name: string;
  route: string;
}

interface NavItem {
  name: string;
  route: string;
  showSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenavEvent = new EventEmitter<void>();
  
  isHandset$: Observable<boolean>;
  currentDate = new Date();
  
  navItems: NavItem[] = [
    { 
      name: 'Info Vigilance', 
      route: '/info-vigilance',
      submenu: [] 
    },
    { 
      name: 'Programme Travaux', 
      route: '/programme-travaux',
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
      submenu: [
        { name: 'Marché primaire', route: '/capacites/marche-primaire' },
        { name: 'Marché secondaire', route: '/capacites/marche-secondaire' },
        { name: 'Marché aval', route: '/capacites/marche-aval' }
      ] 
    },
    { 
      name: 'Flux', 
      route: '/flux',
      submenu: [
        { name: 'Commerciaux', route: '/flux/commerciaux' },
        { name: 'Physiques', route: '/flux/physiques' },
        { name: 'Carte des quantités', route: '/flux/carte-quantites' }
      ] 
    },
    { 
      name: 'Quantités Aval', 
      route: '/quantites-aval',
      submenu: [
        { name: 'Consommations', route: '/quantites-aval/consommations' },
        { name: 'Production Biométhane', route: '/quantites-aval/production-biomethane' }
      ] 
    },
    { 
      name: 'Équilibrage', 
      route: '/equilibrage',
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
      submenu: [] 
    },
    { 
      name: 'Tarifs', 
      route: '/tarifs',
      submenu: [] 
    }
  ];
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
  
  ngOnInit(): void {
    // Initialize items
    this.navItems.forEach(item => {
      item.showSubmenu = false;
    });
    
    // Close dropdowns on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeAllSubmenus();
    });
  }
  
  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }
  
  openSubmenu(item: NavItem): void {
    this.closeAllSubmenus();
    if (item.submenu && item.submenu.length > 0) {
      item.showSubmenu = true;
    }
  }
  
  closeSubmenu(item: NavItem): void {
    item.showSubmenu = false;
  }
  
  closeAllSubmenus(): void {
    this.navItems.forEach(item => {
      item.showSubmenu = false;
    });
  }
  
  onNavItemClick(item: NavItem): void {
    if (!item.submenu || item.submenu.length === 0) {
      this.closeAllSubmenus();
    }
  }
}