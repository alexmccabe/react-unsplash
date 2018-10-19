import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'reducers';

import initialState from './initialState';

const configureStore = () => {
    return createStore(
        reducers,
        compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
};

export default configureStore;
