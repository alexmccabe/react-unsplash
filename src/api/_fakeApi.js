import { generateRandomInteger } from 'utils/math';

function delay(time) {
  time = time || generateRandomInteger(1000, 2000);

  return new Promise(resolve => setTimeout(resolve, time));
}

export const fakeGetAll = (data, filter = 'latest') => {
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
};

export const fakeGet = (data, id) => {
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
