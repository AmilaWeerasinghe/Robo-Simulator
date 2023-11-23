import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import Table from './components/Table';
import Navigator from './components/Navigator';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Table />
        <Navigator />
      </div>
    </Provider>
  );
};

export default App;
