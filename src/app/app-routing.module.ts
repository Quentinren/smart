import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammeTravauxComponent } from './components/programme-travaux/programme-travaux.component';
import { VigilanceInfoComponent } from './components/vigilance-info/vigilance-info.component';
import { StockConduiteProjecteComponent } from './components/stock-conduite-projete/stock-conduite-projete.component';
import { FlexibiliteIntrajComponent } from './components/flexibilite-intraj/flexibilite-intraj.component';

const routes: Routes = [
  { path: '', component: VigilanceInfoComponent },
  { path: 'info-vigilance', component: VigilanceInfoComponent },
  
  // Programme Travaux routes - all handled by ProgrammeTravauxComponent
  { path: 'programme-travaux', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/points-cam', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/points-non-cam', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/super-points', component: ProgrammeTravauxComponent },
  { path: 'programme-travaux/carte-restriction', component: ProgrammeTravauxComponent },
  
  // Other routes - use VigilanceInfoComponent as placeholder
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
  
  { path: 'flexibilite-intraj', component: FlexibiliteIntrajComponent },
  { path: 'tarifs', component: VigilanceInfoComponent },
  { path: '**', redirectTo: 'info-vigilance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }