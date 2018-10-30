import { combineReducers } from 'redux';

import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_FAILURE,
  FETCH_SINGLE_IMAGE_REQUEST,
  FETCH_SINGLE_IMAGE_SUCCESS,
  FETCH_SINGLE_IMAGE_FAILURE
} from 'actions/types';

const byId = (state = {}, action) => {
  switch (action.type) {
  case FETCH_IMAGES_SUCCESS:
  case FETCH_SINGLE_IMAGE_SUCCESS:
    return {
      ...state,
      ...action.response.entities.images
    };

  default:
    return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
  case FETCH_IMAGES_SUCCESS:
    return action.response.result;

  case FETCH_SINGLE_IMAGE_SUCCESS:
    return [...state, action.response.result];

  default:
    return state;
  }
};

const isFetching = (state = false, { type }) => {
  switch (type) {
  case FETCH_IMAGES_REQUEST:
  case FETCH_SINGLE_IMAGE_REQUEST:
    return true;

  case FETCH_IMAGES_SUCCESS:
  case FETCH_IMAGES_FAILURE:
  case FETCH_SINGLE_IMAGE_SUCCESS:
  case FETCH_SINGLE_IMAGE_FAILURE:
    return false;

  default:
    return state;
  }
};

const pageNum = (state = 1, action) => {
  switch (action.type) {
  case FETCH_IMAGES_SUCCESS:
    return action.pageNum;

  default:
    return state;
  }
};

export default combineReducers({
  byId,
  ids,
  isFetching,
  pageNum
});

export const getImage = (state, id) => {
  return state.images.byId[id];
};

export const getVisibleImages = state => {
  return state.images.ids.map(id => getImage(state, id));
};

export const getIsFetching = state => state.images.isFetching;
export const getPageNumber = state => state.images.pageNum;
