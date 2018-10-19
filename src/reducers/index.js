import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';

let exportReducers;
const reducers = {
  images: imagesReducer
};

if (Object.keys(reducers).length) {
  exportReducers = combineReducers(reducers);
} else {
  exportReducers = () => {};
}

export default exportReducers;
