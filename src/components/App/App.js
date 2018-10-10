import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from 'routes';
import configureStore from 'store';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div className="App">
            <Routes />
        </div>
    </Provider>
);

export default App;
