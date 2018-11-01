// import unsplashHttp from './http/unsplash';
import { generateRandomInteger } from 'utils/math';
import data from './images.json';

function delay(time) {
  time = time || generateRandomInteger(1000, 2000);

  return new Promise(resolve => setTimeout(resolve, time));
}

export const getAll = (filter = 'latest', page = 1, perPage = 10) => {
  switch (filter) {
  case 'oldest':
    return delay().then(() => {
      return { data: data.slice().reverse() };
    });

  case 'popular':
    return delay().then(() => {
      const sorted = data
        .slice()
        .sort((a, b) => {
          if (a.likes < b.likes) return -1;
          if (a.likes > b.likes) return 1;
          return 0;
        })
        .reverse();

      return { data: sorted };
    });

  default:
    return delay().then(() => {
      return { data };
    });
  }

  // return unsplashHttp.get('/photos', {
  //   params: {
  //     order_by: filter,
  //     per_page: perPage,
  //     page
  //   }
  // });
};

export const get = id => {
  return delay().then(() => {
    return {
      data: data.find(item => {
        if (item.id === id) {
          return item;
        }

        return null;
      })
    };
  });
};
