import { Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ProgrammeTravauxComponent } from './components/programme-travaux/programme-travaux.component';
import { VigilanceInfoComponent } from './components/vigilance-info/vigilance-info.component';

export const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'info-vigilance', component: VigilanceInfoComponent },
  
  // Programme Travaux routes
  { path: 'programme-travaux', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/points-cam', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/points-non-cam', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/super-points', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/carte-restriction', component: ProgrammeTravauxComponent },
  
  // Capacités routes
  { path: 'capacites', component: MainDashboardComponent },
  { path: 'capacites/marche-primaire', component: MainDashboardComponent },
  { path: 'capacites/marche-secondaire', component: MainDashboardComponent },
  { path: 'capacites/marche-aval', component: MainDashboardComponent },
  
  // Flux routes
  { path: 'flux', component: MainDashboardComponent },
  { path: 'flux/commerciaux', component: MainDashboardComponent },
  { path: 'flux/physiques', component: MainDashboardComponent },
  { path: 'flux/carte-quantites', component: MainDashboardComponent },
  
  // Quantités Aval routes
  { path: 'quantites-aval', component: MainDashboardComponent },
  { path: 'quantites-aval/consommations', component: MainDashboardComponent },
  { path: 'quantites-aval/production-biomethane', component: MainDashboardComponent },
  
  // Équilibrage routes
  { path: 'equilibrage', component: MainDashboardComponent },
  { path: 'equilibrage/desequilibre-programme', component: MainDashboardComponent },
  { path: 'equilibrage/soldes-desequilibres', component: MainDashboardComponent },
  { path: 'equilibrage/bilan-es', component: MainDashboardComponent },
  { path: 'equilibrage/stock-conduite', component: MainDashboardComponent },
  { path: 'equilibrage/stock-conduite-projete', component: MainDashboardComponent },
  { path: 'equilibrage/prevision-clients-profiles', component: MainDashboardComponent },
  { path: 'equilibrage/prix', component: MainDashboardComponent },
  { path: 'equilibrage/position-desequilibre-final', component: MainDashboardComponent },
  
  // Opérateurs Connectés routes
  { path: 'operateurs-connectes', component: MainDashboardComponent },
  { path: 'operateurs-connectes/elengy', component: MainDashboardComponent },
  { path: 'operateurs-connectes/dunkerque-lng', component: MainDashboardComponent },
  { path: 'operateurs-connectes/telsf', component: MainDashboardComponent },
  { path: 'operateurs-connectes/storengy', component: MainDashboardComponent },
  
  { path: 'flexibilite-intraj', component: MainDashboardComponent },
  { path: 'tarifs', component: MainDashboardComponent },
  { path: '**', redirectTo: '' }
];