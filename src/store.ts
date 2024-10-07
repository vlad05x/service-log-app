import { createStore, combineReducers } from "redux";
import serviceLogReducer from "./reducers";

const rootReducer = combineReducers({
  serviceLog: serviceLogReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 
export default store;
