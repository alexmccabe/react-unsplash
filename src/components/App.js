import React from 'react';
import { Provider } from 'react-redux';

import ScreensRoot from 'screens/Root';
import configureStore from 'store';
import 'assets/scss/app.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ScreensRoot />
    </Provider>
  );
};

export default App;
