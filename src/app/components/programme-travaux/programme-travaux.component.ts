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
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    MatTableModule
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
  chartData: ChartData[] = [];
  
  // Table data
  displayedColumns: string[] = ['date', 'capacity', 'reduction'];
  tableData: TableData[] = [];
  
  // Current sub-route
  currentSubRoute: string = '';
  sectionTitle: string = 'Programme Travaux';
  
  constructor(private router: Router) {
    // Listen to route changes to detect which sub-route we're on
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.url;
      if (url.includes('points-cam')) {
        this.currentSubRoute = 'points-cam';
        this.sectionTitle = 'Programme Travaux - Points CAM';
      } else if (url.includes('points-non-cam')) {
        this.currentSubRoute = 'points-non-cam';
        this.sectionTitle = 'Programme Travaux - Points non-CAM';
      } else if (url.includes('super-points')) {
        this.currentSubRoute = 'super-points';
        this.sectionTitle = 'Programme Travaux - Super Points';
      } else if (url.includes('carte-restriction')) {
        this.currentSubRoute = 'carte-restriction';
        this.sectionTitle = 'Programme Travaux - Carte de restriction';
      } else {
        this.currentSubRoute = '';
        this.sectionTitle = 'Programme Travaux';
      }
      
      // Load relevant data based on current sub-route
      this.loadData();
    });
  }
  
  ngOnInit(): void {
    // Initialize with current route
    const currentUrl = this.router.url;
    if (currentUrl.includes('points-cam')) {
      this.currentSubRoute = 'points-cam';
      this.sectionTitle = 'Programme Travaux - Points CAM';
    } else if (currentUrl.includes('points-non-cam')) {
      this.currentSubRoute = 'points-non-cam';
      this.sectionTitle = 'Programme Travaux - Points non-CAM';
    } else if (currentUrl.includes('super-points')) {
      this.currentSubRoute = 'super-points';
      this.sectionTitle = 'Programme Travaux - Super Points';
    } else if (currentUrl.includes('carte-restriction')) {
      this.currentSubRoute = 'carte-restriction';
      this.sectionTitle = 'Programme Travaux - Carte de restriction';
    }
    
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
    
    // Generate mock data for the table based on current sub-route
    switch (this.currentSubRoute) {
      case 'points-cam':
        this.tableData = [
          { date: new Date('2025-04-25'), capacity: 650, reduction: 7 },
          { date: new Date('2025-04-26'), capacity: 620, reduction: 11 },
          { date: new Date('2025-04-27'), capacity: 600, reduction: 14 },
          { date: new Date('2025-04-28'), capacity: 630, reduction: 10 },
          { date: new Date('2025-04-29'), capacity: 650, reduction: 7 }
        ];
        break;
      case 'points-non-cam':
        this.tableData = [
          { date: new Date('2025-04-25'), capacity: 450, reduction: 5 },
          { date: new Date('2025-04-26'), capacity: 420, reduction: 8 },
          { date: new Date('2025-04-27'), capacity: 400, reduction: 12 },
          { date: new Date('2025-04-28'), capacity: 430, reduction: 7 },
          { date: new Date('2025-04-29'), capacity: 450, reduction: 5 }
        ];
        break;
      case 'super-points':
        this.tableData = [
          { date: new Date('2025-04-25'), capacity: 850, reduction: 10 },
          { date: new Date('2025-04-26'), capacity: 820, reduction: 15 },
          { date: new Date('2025-04-27'), capacity: 800, reduction: 18 },
          { date: new Date('2025-04-28'), capacity: 830, reduction: 12 },
          { date: new Date('2025-04-29'), capacity: 850, reduction: 10 }
        ];
        break;
      default:
        this.tableData = [
          { date: new Date('2025-04-25'), capacity: 650, reduction: 7 },
          { date: new Date('2025-04-26'), capacity: 620, reduction: 11 },
          { date: new Date('2025-04-27'), capacity: 600, reduction: 14 },
          { date: new Date('2025-04-28'), capacity: 630, reduction: 10 },
          { date: new Date('2025-04-29'), capacity: 650, reduction: 7 }
        ];
    }
  }
}