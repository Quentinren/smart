import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormGroup, FormBuilder } from '@angular/forms';

interface StockPoint {
  hour: string;
  value: number;
}

interface ZoneDefinition {
  name: string;
  min: number;
  max: number;
  color: string;
}

interface LegendItem {
  name: string;
  class: string;
}

@Component({
  selector: 'app-stock-conduite-projete',
  templateUrl: './stock-conduite-projete.component.html',
  styleUrls: ['./stock-conduite-projete.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class StockConduiteProjecteComponent implements OnInit {
  dateRange: FormGroup;
  stockData: StockPoint[] = [];
  chartHeight = 400;
  chartWidth = 900;
  yMin = 2500;
  yMax = 3200;
  currentValue = 2873.422;
  currentTime = '16:00';
  equilibriumStatus = 'Équilibré';
  lastUpdate = '25/04/2025 16:15';
  selectedDate = '25/04/2025';
  
  // Valeurs pour l'axe Y
  yAxisValues = [2600, 2700, 2800, 2900, 3000, 3100];
  
  zones: ZoneDefinition[] = [
    { name: 'Très long', min: 3059, max: 3200, color: '#ff5733' },
    { name: 'Long', min: 3005, max: 3059, color: '#fff8e1' },
    { name: 'Équilibré long', min: 2951, max: 3005, color: '#ccfadc' },
    { name: 'Équilibré', min: 2797, max: 2951, color: '#19ea7b' },
    { name: 'Équilibré court', min: 2681, max: 2797, color: '#ccfadc' },
    { name: 'Court', min: 2627, max: 2681, color: '#fff8e1' },
    { name: 'Très court', min: 2500, max: 2627, color: '#ff5733' }
  ];
  
  legendItems: LegendItem[] = [
    { name: 'Très long', class: 'tres-long' },
    { name: 'Long', class: 'long' },
    { name: 'Équilibré', class: 'equilibre' },
    { name: 'Court', class: 'court' },
    { name: 'Très court', class: 'tres-court' }
  ];
  
  timeLabels = ['06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h'];
  
  constructor(private fb: FormBuilder) {
    this.dateRange = this.fb.group({
      start: [new Date()],
      end: [new Date()]
    });
  }
  
  ngOnInit(): void {
    this.generateStockData();
  }
  
  generateStockData(): void {
    // Données d'exemple
    this.stockData = [
      { hour: '06h', value: 2843 },
      { hour: '07h', value: 2843 },
      { hour: '08h', value: 2843 },
      { hour: '09h', value: 2843 },
      { hour: '10h', value: 2824 },
      { hour: '11h', value: 2843 },
      { hour: '12h', value: 2834 },
      { hour: '13h', value: 2843 },
      { hour: '14h', value: 2843 },
      { hour: '15h', value: 2843 },
      { hour: '16h', value: 2873 }
    ];
  }
  
  refreshData(): void {
    this.lastUpdate = new Date().toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric', 
      hour: '2-digit',
      minute: '2-digit'
    });
    this.generateStockData();
  }
  
  getYPosition(value: number): number {
    // Conversion de la valeur en position Y dans le SVG
    const range = this.yMax - this.yMin;
    const normalizedValue = (value - this.yMin) / range;
    return this.chartHeight - (normalizedValue * this.chartHeight);
  }
  
  getXPosition(index: number): number {
    // Conversion de l'index en position X dans le SVG
    const step = this.chartWidth / (this.stockData.length - 1);
    return index * step;
  }
  
  getZoneHeight(zone: ZoneDefinition): number {
    // Calcul de la hauteur d'une zone
    const range = this.yMax - this.yMin;
    const zoneRange = zone.max - zone.min;
    return (zoneRange / range) * this.chartHeight;
  }
  
  getZoneY(zone: ZoneDefinition): number {
    // Calcul de la position Y d'une zone
    return this.getYPosition(zone.max);
  }
  
  onDateRangeChange(): void {
    // Mise à jour des données en fonction de la plage de dates
    console.log('Date range changed:', this.dateRange.value);
    // Appel potentiel à un service pour obtenir de nouvelles données
  }
}