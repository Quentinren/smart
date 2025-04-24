import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Limit } from '../../shared/models/limit.model';

@Component({
  selector: 'app-limits-table',
  templateUrl: './limits-table.component.html',
  styleUrls: ['./limits-table.component.scss']
})
export class LimitsTableComponent implements OnInit {
  @Input() limits: Limit[] = [];
  @Output() limitToggled = new EventEmitter<string>();
  
  displayedColumns: string[] = ['status', 'id', 'side', 'value', 'works', 'interruptible', 'spread', 'restriction'];
  
  // Column titles
  tableTitle: string = 'Limites';
  vigilanceLevel: string = 'Niveau de vigilance';
  applicationSide: string = 'Côté d\'application';
  workImpact: string = 'Travaux à petit impact (GWh 25°C)';
  interruptibleSupply: string = 'Coupure interruptible / UIOLI et arrêt des ventes';
  localizedSpread: string = 'Spread localisé';
  mutualizedRestriction: string = 'Restriction mutualisée';
  
  constructor() {}
  
  ngOnInit(): void {}
  
  toggleLimit(id: string): void {
    this.limitToggled.emit(id);
  }
}