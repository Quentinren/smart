import { Component, OnInit } from '@angular/core';
import { Limit } from '../../shared/models/limit.model';
import { LimitsService } from '../../shared/services/limits.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vigilance-info',
  templateUrl: './vigilance-info.component.html',
  styleUrls: ['./vigilance-info.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule]
})
export class VigilanceInfoComponent implements OnInit {
  displayedColumns: string[] = ['status', 'id', 'side', 'value', 'works', 'interruptible', 'spread', 'restriction'];
  
  limitItems$!: Observable<Limit[]>;
  
  tableTitle: string = 'Limites';
  vigilanceLevel: string = 'Niveau de vigilance';
  applicationSide: string = 'Côté d\'application';
  workImpact: string = 'Travaux à petit impact (GWh 25°C)';
  interruptibleSupply: string = 'Coupure interruptible / UIOLI et arrêt des ventes';
  localizedSpread: string = 'Spread localisé';
  mutualizedRestriction: string = 'Restriction mutualisée';
  
  constructor(private limitsService: LimitsService) {}
  
  ngOnInit(): void {
    this.limitItems$ = this.limitsService.getLimits();
  }
  
  toggleLimit(id: string): void {
    this.limitsService.toggleLimit(id);
  }
}
