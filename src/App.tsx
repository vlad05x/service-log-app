import React from 'react';
import ServiceLogForm from './components/ServiceLogForm/ServiceLogForm';
import { Provider } from 'react-redux';
import store from './store';
// import ServiceLogList from './components/ServiceLogList/ServiceLogList';

const App = () => {
  return (
    <Provider store={store}>
      <div className='__container'>
        <h1>Service Log Form</h1>
        <ServiceLogForm />
        {/* <ServiceLogList /> */}
      </div>
    </Provider>
  );
};

export default App;
