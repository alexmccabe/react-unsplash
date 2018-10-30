import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';
import configureStore from 'store';
import 'assets/scss/app.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routes />
    </div>
  </Provider>
);

export default App;
