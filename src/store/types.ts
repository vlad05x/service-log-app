export interface Draft {
  id: string;
  providerId: string;
  serviceOrder: string;
  truckId: string;
  odometer: number;
  engineHours: number;
  startDate: string;
  endDate: string;
  type: string;
  serviceDescription: string;
}
