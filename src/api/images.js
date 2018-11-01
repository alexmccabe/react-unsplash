// import unsplashHttp from './http/unsplash';
import data from './images.json';
import { fakeGetAll, fakeGet } from './_fakeApi';

export const getAll = (filter = 'latest', page = 1, perPage = 10) => {
  return fakeGetAll(data, filter);

  // return unsplashHttp.get('/photos', {
  //   params: {
  //     order_by: filter,
  //     per_page: perPage,
  //     page
  //   }
  // });
};

export const get = id => {
  return fakeGet(data, id);
};
