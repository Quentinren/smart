import { Routes } from '@angular/router';
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
  
  // Other routes - using VigilanceInfoComponent as placeholders
  { path: 'capacites', component: VigilanceInfoComponent },
  { path: 'capacites/marche-primaire', component: VigilanceInfoComponent },
  { path: 'capacites/marche-secondaire', component: VigilanceInfoComponent },
  { path: 'capacites/marche-aval', component: VigilanceInfoComponent },
  
  { path: 'flux', component: VigilanceInfoComponent },
  { path: 'flux/commerciaux', component: VigilanceInfoComponent },
  { path: 'flux/physiques', component: VigilanceInfoComponent },
  { path: 'flux/carte-quantites', component: VigilanceInfoComponent },
  
  { path: 'quantites-aval', component: VigilanceInfoComponent },
  { path: 'quantites-aval/consommations', component: VigilanceInfoComponent },
  { path: 'quantites-aval/production-biomethane', component: VigilanceInfoComponent },
  
  { path: 'equilibrage', component: VigilanceInfoComponent },
  { path: 'equilibrage/desequilibre-programme', component: VigilanceInfoComponent },
  { path: 'equilibrage/soldes-desequilibres', component: VigilanceInfoComponent },
  { path: 'equilibrage/bilan-es', component: VigilanceInfoComponent },
  { path: 'equilibrage/stock-conduite', component: VigilanceInfoComponent },
  { path: 'equilibrage/stock-conduite-projete', component: StockConduiteProjecteComponent },
  { path: 'equilibrage/prevision-clients-profiles', component: VigilanceInfoComponent },
  { path: 'equilibrage/prix', component: VigilanceInfoComponent },
  { path: 'equilibrage/position-desequilibre-final', component: VigilanceInfoComponent },
  
  { path: 'operateurs-connectes', component: VigilanceInfoComponent },
  { path: 'operateurs-connectes/elengy', component: VigilanceInfoComponent },
  { path: 'operateurs-connectes/dunkerque-lng', component: VigilanceInfoComponent },
  { path: 'operateurs-connectes/telsf', component: VigilanceInfoComponent },
  { path: 'operateurs-connectes/storengy', component: VigilanceInfoComponent },
  
  // Flexibilité IntraJ route
  { path: 'flexibilite-intraj', component: FlexibiliteIntrajComponent },
  
  { path: 'tarifs', component: VigilanceInfoComponent },
  
  // Wildcard route - redirect to home
  { path: '**', redirectTo: 'info-vigilance' }
];