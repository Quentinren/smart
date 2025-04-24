import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'info-vigilance', component: MainDashboardComponent },
  { path: 'programme-travaux', component: MainDashboardComponent },
  { path: 'capacites', component: MainDashboardComponent },
  { path: 'flux', component: MainDashboardComponent },
  { path: 'quantites-aval', component: MainDashboardComponent },
  { path: 'equilibrage', component: MainDashboardComponent },
  { path: 'operateurs-connectes', component: MainDashboardComponent },
  { path: 'flexibilite-intraj', component: MainDashboardComponent },
  { path: 'tarifs', component: MainDashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }