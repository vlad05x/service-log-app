import { ServiceLogDraft, ServiceLog } from "./types";

export const SAVE_DRAFT = "SAVE_DRAFT";
export const DELETE_DRAFT = "DELETE_DRAFT";
export const CLEAR_DRAFTS = "CLEAR_DRAFTS";
export const CREATE_LOG = "CREATE_LOG";
export const DELETE_LOG = "DELETE_LOG";

export interface SaveDraftAction {
  type: typeof SAVE_DRAFT;
  payload: ServiceLogDraft; 
}

export interface DeleteDraftAction {
  type: typeof DELETE_DRAFT;
  payload: number; 
}

export interface DeleteLogAction {
  type: typeof DELETE_LOG;
  payload: number;
}

export interface ClearDraftAction {
  type: typeof CLEAR_DRAFTS;
}

export interface CreateLogAction {
  type: typeof CREATE_LOG;
  payload: ServiceLog; 
}


export type ServiceLogActionTypes =
  | SaveDraftAction
  | DeleteDraftAction
  | ClearDraftAction
  | CreateLogAction
  | DeleteLogAction;

export const saveDraft = (data: ServiceLogDraft): SaveDraftAction => ({
  type: SAVE_DRAFT,
  payload: data,
});

export const deleteDraft = (id: number): DeleteDraftAction => ({
  type: DELETE_DRAFT,
  payload: id,
});

export const deletelog = (id: number): DeleteLogAction => ({
  type: DELETE_LOG,
  payload: id,
});

export const clearDraft = (): ClearDraftAction => ({
  type: CLEAR_DRAFTS,
});

export const createLog = (data: ServiceLog): CreateLogAction => ({
  type: CREATE_LOG,
  payload: data,
});
