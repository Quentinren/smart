import { Component, OnInit } from '@angular/core';
import { Limit } from '../../shared/models/limit.model';
import { LimitsService } from '../../shared/services/limits.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Definition {
  title: string;
  description: string;
}

interface LanguageData {
  tableTitle: string;
  applicationSide: string;
  workImpact: string;
  interruptibleSupply: string;
  localizedSpread: string;
  mutualizedRestriction: string;
  lastUpdateLabel: string;
  definitionsLabel: string;
  mapTitles: {
    northSouth: string;
    southNorth: string;
  };
  definitions: Definition[];
}

@Component({
  selector: 'app-vigilance-info',
  templateUrl: './vigilance-info.component.html',
  styleUrls: ['./vigilance-info.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule]
})
export class VigilanceInfoComponent implements OnInit {
  displayedColumns: string[] = ['status', 'id', 'side', 'value', 'interruptible', 'spread', 'restriction'];
  
  limitItems$!: Observable<Limit[]>;
  lastUpdate = '25/04/2025 16:21';
  showDefinitions = false;
  currentLang = 'fr';

  // These properties will be set based on the current language
  tableTitle = '';
  applicationSide = '';
  workImpact = '';
  interruptibleSupply = '';
  localizedSpread = '';
  mutualizedRestriction = '';
  lastUpdateLabel = '';
  definitionsLabel = '';
  mapTitles = { northSouth: '', southNorth: '' };
  definitions: Definition[] = [];
  
  // Language data
  private languageData: Record<string, LanguageData> = {
    'fr': {
      tableTitle: 'Limites',
      applicationSide: 'Côté d\'application',
      workImpact: 'Travaux à petit impact (GWh 25°C)',
      interruptibleSupply: 'Coupure interruptible / UIOLI et arrêt des ventes',
      localizedSpread: 'Spread localisé',
      mutualizedRestriction: 'Restriction mutualisée',
      lastUpdateLabel: 'Dernier rafraîchissement',
      definitionsLabel: 'Définitions',
      mapTitles: {
        northSouth: 'Carte des LIMITES NORD>SUD ET EST>OUEST',
        southNorth: 'CARTE DES LIMITES SUD>NORD'
      },
      definitions: [
        {
          title: 'Coupure de l\'interruptible et arrêt des ventes :',
          description: 'Coupure des capacités de transport interruptibles (dont rebours et UIOLI) et arrêt des ventes de capacités sur les points/sens qui aggravent la limite.'
        },
        {
          title: 'Spread localisé :',
          description: 'Appel au marché sur la bourse via un double produit localisé de part et d\'autres de la limite : les TSOs achètent du gaz en aval de la limite et le revendent simultanément en amont de la limite.'
        },
        {
          title: 'Restriction mutualisée :',
          description: 'Restriction partielle des capacités fermes au pro-rata des capacités souscrites, mutualisée à l\'échelle d\'un superpoint. Uniquement du côté de gestion de la limite.'
        },
        {
          title: 'Monitoring stockage hiver :',
          description: 'Indicateur de suivi du niveau de remplissage des stockages situés à l\'aval des limites du réseau. L\'objet est de vérifier la disponibilité à moyen terme d\'un stock suffisant pour que les mécanismes de gestion des congestions soient efficaces en cas d\'activation.'
        },
        {
          title: 'Travaux à petit impact :',
          description: 'Indicateur utilisé lorsqu\'une maintenance a un impact sur la limite mais ne donne pas lieu à une restriction de capacités. Le niveau d\'impact est limité à un seuil maximal de « petite maintenance » fixé par la CRE, sauf pour les limites Sud-Nord.'
        }
      ]
    },
    'en': {
      tableTitle: 'Limits',
      applicationSide: 'Application Side',
      workImpact: 'Low-impact Works (GWh 25°C)',
      interruptibleSupply: 'Interruptible Cut / UIOLI and Sales Halt',
      localizedSpread: 'Localized Spread',
      mutualizedRestriction: 'Mutualized Restriction',
      lastUpdateLabel: 'Last Update',
      definitionsLabel: 'Definitions',
      mapTitles: {
        northSouth: 'NORTH>SOUTH AND EAST>WEST LIMITS MAP',
        southNorth: 'SOUTH>NORTH LIMITS MAP'
      },
      definitions: [
        {
          title: 'Interruptible Cut and Sales Halt:',
          description: 'Cutting interruptible transportation capacities (including backhaul and UIOLI) and stopping capacity sales at points/directions that worsen the limit.'
        },
        {
          title: 'Localized Spread:',
          description: 'Market call on the exchange via a double localized product on both sides of the limit: TSOs buy gas downstream of the limit and simultaneously resell it upstream of the limit.'
        },
        {
          title: 'Mutualized Restriction:',
          description: 'Partial restriction of firm capacities pro-rated to subscribed capacities, mutualized at the superpoint level. Only on the management side of the limit.'
        },
        {
          title: 'Winter Storage Monitoring:',
          description: 'Indicator tracking the filling level of storage facilities located downstream of network limits. The purpose is to verify medium-term availability of sufficient stock so that congestion management mechanisms are effective when activated.'
        },
        {
          title: 'Low-impact Works:',
          description: 'Indicator used when maintenance impacts the limit but does not lead to capacity restrictions. The impact level is limited to a maximum threshold of "small maintenance" set by the CRE, except for South-North limits.'
        }
      ]
    }
  };
  
  constructor(private limitsService: LimitsService) {}
  
  ngOnInit(): void {
    this.limitItems$ = this.limitsService.getLimits();
    this.setLanguage(this.currentLang);
  }
  
  toggleLimit(id: string): void {
    this.limitsService.toggleLimit(id);
  }

  toggleDefinitions(): void {
    this.showDefinitions = !this.showDefinitions;
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.setLanguage(lang);
  }

  private setLanguage(lang: string): void {
    const data = this.languageData[lang];
    this.tableTitle = data.tableTitle;
    this.applicationSide = data.applicationSide;
    this.workImpact = data.workImpact;
    this.interruptibleSupply = data.interruptibleSupply;
    this.localizedSpread = data.localizedSpread;
    this.mutualizedRestriction = data.mutualizedRestriction;
    this.lastUpdateLabel = data.lastUpdateLabel;
    this.definitionsLabel = data.definitionsLabel;
    this.mapTitles = data.mapTitles;
    this.definitions = data.definitions;
  }
}