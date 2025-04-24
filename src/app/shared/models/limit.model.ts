export interface Limit {
    id: string;
    checked: boolean;
    side: 'Amont' | 'Aval';
    value?: number;
    impactedWorks?: boolean;
    interruptible?: boolean;
    spread?: boolean;
    restriction?: boolean;
  }