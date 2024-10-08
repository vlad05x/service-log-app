export interface ServiceLogDraft {
  id: number,
  providerId: string;
  serviceOrder: string;
  truckId: string;
  odometer: number;
  engineHours: number;
  startDate: string;
  endDate: string;
  type: "planned" | "unplanned" | "emergency";
  serviceDescription: string;
}

export interface ServiceLog {
  id: number; 
  draft: ServiceLogDraft; 
  createdAt: string; 
}
