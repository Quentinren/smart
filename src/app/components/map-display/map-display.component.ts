import { Component } from '@angular/core';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent {
  maps = [
    {
      title: 'CARTE DES LIMITES NORD>SUD ET EST>OUEST',
      image: 'assets/images/france-map-nord-sud.svg'
    },
    {
      title: 'CARTE DES LIMITES SUD>NORD',
      image: 'assets/images/france-map-sud-nord.svg'
    }
  ];
}