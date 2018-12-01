import { normalize } from 'normalizr';

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_SINGLE_IMAGE_REQUEST,
  FETCH_SINGLE_IMAGE_SUCCESS
} from '../types';

import { getIsFetching } from 'reducers/imagesReducer';
import { imagesApi } from 'api';
import * as schema from '../schema';
import { Promise } from 'rsvp';

export const fetchImages = (filter, pageNum) => (dispatch, getState) => {
  // if (getIsFetching(getState())) {
  //   return Promise.resolve();
  // }

  dispatch({
    type: FETCH_IMAGES_REQUEST,
    filter,
    pageNum
  });

  return imagesApi.getAll(filter, pageNum).then(response => {
    dispatch({
      type: FETCH_IMAGES_SUCCESS,
      response: normalize(response.data, schema.imageListSchema),
      filter,
      pageNum
    });
  });
};

export const fetchSingleImage = id => dispatch => {
  dispatch({
    type: FETCH_SINGLE_IMAGE_REQUEST
  });

  imagesApi.get(id).then(response => {
    dispatch({
      type: FETCH_SINGLE_IMAGE_SUCCESS,
      response: normalize(response.data, schema.imageSchema)
    });
  });
};
