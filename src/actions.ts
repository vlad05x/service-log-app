import { ServiceLogDraft, ServiceLog } from './types';

export const SAVE_DRAFT = 'SAVE_DRAFT';
export const DELETE_DRAFT = 'DELETE_DRAFT';
export const CLEAR_DRAFTS = 'CLEAR_DRAFTS';
export const CREATE_LOG = 'CREATE_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const UPDATE_LOG = 'UPDATE_LOG';

interface SaveDraftAction {
  type: typeof SAVE_DRAFT;
  payload: ServiceLogDraft;
}

interface DeleteDraftAction {
  type: typeof DELETE_DRAFT;
  payload: number; 
}

interface ClearDraftsAction {
  type: typeof CLEAR_DRAFTS;
}

interface CreateLogAction {
  type: typeof CREATE_LOG;
  payload: ServiceLog;
}

interface DeleteLogAction {
  type: typeof DELETE_LOG;
  payload: number; 
}

interface UpdateLogAction {
  type: typeof UPDATE_LOG;
  payload: ServiceLog; 
}

export const updateLog = (log: ServiceLog): UpdateLogAction => ({
  type: UPDATE_LOG,
  payload: log,
});

export type ServiceLogActionTypes =
  | SaveDraftAction
  | DeleteDraftAction
  | ClearDraftsAction
  | CreateLogAction
  | DeleteLogAction
  | UpdateLogAction;


export const saveDraft = (draft: ServiceLogDraft): SaveDraftAction => ({
  type: SAVE_DRAFT,
  payload: draft,
});

export const deleteDraft = (index: number): DeleteDraftAction => ({
  type: DELETE_DRAFT,
  payload: index,
});

export const clearDrafts = (): ClearDraftsAction => ({
  type: CLEAR_DRAFTS,
});

export const createLog = (log: ServiceLog): CreateLogAction => ({
  type: CREATE_LOG,
  payload: log,
});

export const deleteLog = (id: number): DeleteLogAction => ({
  type: DELETE_LOG,
  payload: id,
});
