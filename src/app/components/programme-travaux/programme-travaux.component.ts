import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

interface ChartData {
  name: string;
  series: { name: string; value: number }[];
}

interface TableData {
  date: Date;
  capacity: number;
  reduction: number;
}

@Component({
  selector: 'app-programme-travaux',
  templateUrl: './programme-travaux.component.html',
  styleUrls: ['./programme-travaux.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    NgxChartsModule
  ]
})
export class ProgrammeTravauxComponent implements OnInit {
  // Filter variables
  selectedDate: Date = new Date();
  selectedPIR: string = '';
  selectedLocation: string = 'PIV Virtualys';
  selectedDirection: string = '';
  locations: string[] = [
    'PIV Virtualys',
    'Dunkerque',
    'Obergailbach',
    'Oltingue',
    'Taisnières B'
  ];
  
  // Data flags
  dataLoaded: boolean = false;
  
  // Chart data
  chartView: [number, number] = [700, 400];
  // Use a simple string for the color scheme to avoid type issues
  colorScheme = 'cool';
  
  chartData: ChartData[] = [];
  
  // Table data
  displayedColumns: string[] = ['date', 'capacity', 'reduction'];
  tableData: TableData[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    // Initialize with default data
    this.generateMockData();
  }
  
  loadData(): void {
    this.dataLoaded = true;
    // In a real application, this would be an API call
    this.generateMockData();
  }
  
  private generateMockData(): void {
    // Generate mock data for the chart
    this.chartData = [
      {
        name: 'Capacité technique',
        series: [
          { name: '25/04', value: 700 },
          { name: '26/04', value: 700 },
          { name: '27/04', value: 700 },
          { name: '28/04', value: 700 },
          { name: '29/04', value: 700 }
        ]
      },
      {
        name: 'Capacité commerciale',
        series: [
          { name: '25/04', value: 650 },
          { name: '26/04', value: 620 },
          { name: '27/04', value: 600 },
          { name: '28/04', value: 630 },
          { name: '29/04', value: 650 }
        ]
      }
    ];
    
    // Generate mock data for the table
    this.tableData = [
      { date: new Date('2025-04-25'), capacity: 650, reduction: 7 },
      { date: new Date('2025-04-26'), capacity: 620, reduction: 11 },
      { date: new Date('2025-04-27'), capacity: 600, reduction: 14 },
      { date: new Date('2025-04-28'), capacity: 630, reduction: 10 },
      { date: new Date('2025-04-29'), capacity: 650, reduction: 7 }
    ];
  }
}