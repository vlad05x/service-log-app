import { combineReducers } from "redux";
import {
  ADD_DRAFT,
  UPDATE_DRAFT,
  DELETE_DRAFT,
  CLEAR_DRAFTS,
  ADD_SERVICE_LOG,
  UPDATE_SERVICE_LOG,
  DELETE_SERVICE_LOG,
  Draft,
} from "./actions";

const initialDraftState: Draft[] = [];

const draftReducer = (state = initialDraftState, action: any) => {
  switch (action.type) {
    case ADD_DRAFT:
      return [...state, action.payload];
    case UPDATE_DRAFT:
      return state.map((draft) =>
        draft.id === action.payload.id ? { ...draft, ...action.payload.updatedDraft } : draft
      );
    case DELETE_DRAFT:
      return state.filter((draft) => draft.id !== action.payload);
    case CLEAR_DRAFTS:
      return [];
    default:
      return state;
  }
};

const initialServiceLogState: Draft[] = [];

const serviceLogReducer = (state = initialServiceLogState, action: any) => {
  switch (action.type) {
    case ADD_SERVICE_LOG:
      return [...state, action.payload];
    case UPDATE_SERVICE_LOG:
      return state.map((log) =>
        log.id === action.payload.id ? { ...log, ...action.payload.updatedLog } : log
      );
    case DELETE_SERVICE_LOG:
      return state.filter((log) => log.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  drafts: draftReducer,
  serviceLogs: serviceLogReducer,
});

export default rootReducer;
