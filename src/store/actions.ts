export const ADD_DRAFT = 'ADD_DRAFT';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';
export const DELETE_DRAFT = 'DELETE_DRAFT';
export const CLEAR_DRAFTS = 'CLEAR_DRAFTS';
export const ADD_SERVICE_LOG = 'ADD_SERVICE_LOG';
export const UPDATE_SERVICE_LOG = 'UPDATE_SERVICE_LOG';
export const DELETE_SERVICE_LOG = 'DELETE_SERVICE_LOG';

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

export const addDraft = (draft: Draft) => ({ type: ADD_DRAFT, payload: draft });
export const updateDraft = (id: string, updatedDraft: Draft) => ({ type: UPDATE_DRAFT, payload: { id, updatedDraft } });
export const deleteDraft = (id: string) => ({ type: DELETE_DRAFT, payload: id });
export const clearDrafts = () => ({ type: CLEAR_DRAFTS });
export const addServiceLog = (log: Draft) => ({ type: ADD_SERVICE_LOG, payload: log });
export const updateServiceLog = (id: string, updatedLog: Draft) => ({ type: UPDATE_SERVICE_LOG, payload: { id, updatedLog } });
export const deleteServiceLog = (id: string) => ({ type: DELETE_SERVICE_LOG, payload: id });
