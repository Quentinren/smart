import { Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ProgrammeTravauxComponent } from './components/programme-travaux/programme-travaux.component';
import { VigilanceInfoComponent } from './components/vigilance-info/vigilance-info.component';
import { StockConduiteProjecteComponent } from './components/stock-conduite-projete/stock-conduite-projete.component';
import { FlexibiliteIntrajComponent } from './components/flexibilite-intraj/flexibilite-intraj.component';

export const routes: Routes = [
  { path: '', redirectTo: 'info-vigilance', pathMatch: 'full' },
  
  // Info Vigilance route
  { path: 'info-vigilance', component: VigilanceInfoComponent },
  
  // Programme Travaux routes - all handled by the same component with different params
  { path: 'programme-travaux', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/points-cam', component: ProgrammeTravauxComponent, data: { type: 'points-cam' } },
  { path: 'programme-travaux/points-non-cam', component: ProgrammeTravauxComponent, data: { type: 'points-non-cam' } },
  { path: 'programme-travaux/super-points', component: ProgrammeTravauxComponent, data: { type: 'super-points' } },
  { path: 'programme-travaux/carte-restriction', component: ProgrammeTravauxComponent, data: { type: 'carte-restriction' } },
  
  // Other routes - using MainDashboardComponent as placeholders
  { path: 'capacites', component: MainDashboardComponent },
  { path: 'capacites/marche-primaire', component: MainDashboardComponent },
  { path: 'capacites/marche-secondaire', component: MainDashboardComponent },
  { path: 'capacites/marche-aval', component: MainDashboardComponent },
  
  { path: 'flux', component: MainDashboardComponent },
  { path: 'flux/commerciaux', component: MainDashboardComponent },
  { path: 'flux/physiques', component: MainDashboardComponent },
  { path: 'flux/carte-quantites', component: MainDashboardComponent },
  
  { path: 'quantites-aval', component: MainDashboardComponent },
  { path: 'quantites-aval/consommations', component: MainDashboardComponent },
  { path: 'quantites-aval/production-biomethane', component: MainDashboardComponent },
  
  { path: 'equilibrage', component: MainDashboardComponent },
  { path: 'equilibrage/desequilibre-programme', component: MainDashboardComponent },
  { path: 'equilibrage/soldes-desequilibres', component: MainDashboardComponent },
  { path: 'equilibrage/bilan-es', component: MainDashboardComponent },
  { path: 'equilibrage/stock-conduite', component: MainDashboardComponent },
  { path: 'equilibrage/stock-conduite-projete', component: StockConduiteProjecteComponent },
  { path: 'equilibrage/prevision-clients-profiles', component: MainDashboardComponent },
  { path: 'equilibrage/prix', component: MainDashboardComponent },
  { path: 'equilibrage/position-desequilibre-final', component: MainDashboardComponent },
  
  { path: 'operateurs-connectes', component: MainDashboardComponent },
  { path: 'operateurs-connectes/elengy', component: MainDashboardComponent },
  { path: 'operateurs-connectes/dunkerque-lng', component: MainDashboardComponent },
  { path: 'operateurs-connectes/telsf', component: MainDashboardComponent },
  { path: 'operateurs-connectes/storengy', component: MainDashboardComponent },
  
  // Flexibilité IntraJ route
  { path: 'flexibilite-intraj', component: FlexibiliteIntrajComponent },
  
  { path: 'tarifs', component: MainDashboardComponent },
  
  // Wildcard route - redirect to home
  { path: '**', redirectTo: 'info-vigilance' }
];