import { ServiceLogActionTypes } from './actions';
import { ServiceLogDraft, ServiceLog } from './types'; 

interface ServiceLogState {
  drafts: ServiceLogDraft[]; 
  logs: ServiceLog[]; 
}

const initialState: ServiceLogState = {
  drafts: [],
  logs: [],
};

const serviceLogReducer = (
  state: ServiceLogState = initialState,
  action: ServiceLogActionTypes
): ServiceLogState => {
  switch (action.type) {
    case 'SAVE_DRAFT':
      return {
        ...state,
        drafts: [...state.drafts, action.payload],
      };
    case 'DELETE_DRAFT':
      return {
        ...state,
        drafts: state.drafts.filter((_, index) => index !== action.payload),
      };
    case 'DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    case 'CLEAR_DRAFTS':
      return {
        ...state,
        drafts: [],
      };
    case 'CREATE_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    default:
      return state;
  }
};

export default serviceLogReducer;
