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
  
  zones: ZoneDefinition[] = [
    { name: 'Très long', min: 3059, max: 3200, color: '#f8d0a2' },
    { name: 'Long', min: 3005, max: 3059, color: '#f8d0a2' },
    { name: 'Équilibré long', min: 2951, max: 3005, color: '#bfdbd5' },
    { name: 'Équilibré', min: 2897, max: 2951, color: '#bfdbd5' },
    { name: 'Équilibré court', min: 2681, max: 2897, color: '#bfdbd5' },
    { name: 'Court', min: 2627, max: 2681, color: '#f8d0a2' },
    { name: 'Très court', min: 2500, max: 2627, color: '#f8d0a2' }
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
    // Example data points - in a real app, these would come from an API
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
  
  getYPosition(value: number): number {
    // Map the data value to a Y position in the SVG
    const range = this.yMax - this.yMin;
    const normalizedValue = (value - this.yMin) / range;
    // Invert the Y axis (SVG Y increases downward)
    return this.chartHeight - (normalizedValue * this.chartHeight);
  }
  
  getXPosition(index: number): number {
    // Map the index to an X position in the SVG
    const step = this.chartWidth / (this.stockData.length - 1);
    return index * step;
  }
  
  getPointsPath(): string {
    if (this.stockData.length === 0) return '';
    
    return this.stockData.map((point, index) => {
      const x = this.getXPosition(index);
      const y = this.getYPosition(point.value);
      return `${x},${y}`;
    }).join(' ');
  }
  
  getZoneHeight(zone: ZoneDefinition): number {
    // Calculate the height of a zone band
    const range = this.yMax - this.yMin;
    const zoneRange = zone.max - zone.min;
    return (zoneRange / range) * this.chartHeight;
  }
  
  getZoneY(zone: ZoneDefinition): number {
    // Calculate the Y position for a zone band
    return this.getYPosition(zone.max);
  }
  
  onDateRangeChange(): void {
    // In a real app, this would fetch new data based on date range
    console.log('Date range changed:', this.dateRange.value);
    // Potentially get new data from service
  }
}