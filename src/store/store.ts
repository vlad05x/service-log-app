import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
  }
};

const persistedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
