import imageData from './images.json';

export default {
    // image: {},
    images: imageData.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {})
};
