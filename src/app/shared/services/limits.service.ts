import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Limit } from '../models/limit.model';

@Injectable({
  providedIn: 'root'
})
export class LimitsService {
  private limitsSubject = new BehaviorSubject<Limit[]>([
    { id: 'NS1', checked: true, side: 'Amont' },
    { id: 'NS2', checked: true, side: 'Aval', value: 100 },
    { id: 'NS3', checked: true, side: 'Aval' },
    { id: 'NS4', checked: true, side: 'Aval', value: 60 },
    { id: 'EO2', checked: true, side: 'Aval' },
    { id: 'S1', checked: true, side: 'Aval', value: 60 },
    { id: 'SN0', checked: true, side: 'Amont', value: 60 },
    { id: 'SN1', checked: true, side: 'Amont', value: 60 },
    { id: 'SN3', checked: true, side: 'Amont', value: 90 },
    { id: 'SN4', checked: true, side: 'Amont', value: 90 }
  ]);

  limits$ = this.limitsSubject.asObservable();

  constructor() {}

  getLimits(): Observable<Limit[]> {
    return this.limits$;
  }

  updateLimit(id: string, changes: Partial<Limit>): void {
    const currentLimits = this.limitsSubject.getValue();
    const updatedLimits = currentLimits.map(limit => 
      limit.id === id ? { ...limit, ...changes } : limit
    );
    this.limitsSubject.next(updatedLimits);
  }
  
  toggleLimit(id: string): void {
    const currentLimits = this.limitsSubject.getValue();
    const limit = currentLimits.find(l => l.id === id);
    
    if (limit) {
      this.updateLimit(id, { checked: !limit.checked });
    }
  }
}