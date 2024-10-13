import React from 'react';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from './store'; // Импортируем store
import ServiceLogManager from './components/ServiceLogManager';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ServiceLogManager />
      </div>
    </Provider>
  );
};

export default App;
