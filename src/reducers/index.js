import { combineReducers } from 'redux';

let exportReducers;
const reducers = {
    // Imported reducers go here
};

if (Object.keys(reducers).length) {
    exportReducers = combineReducers(reducers);
} else {
    exportReducers = () => {};
}

export default exportReducers;
