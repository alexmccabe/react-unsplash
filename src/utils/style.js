const isElement = element => {
  return element instanceof Element || element instanceof HTMLDocument;
};

export const setStyle = (element, styles) => {
  if (!isElement(element)) {
    throw new Error('element must be of type Element');
  }

  if (styles.constructor !== Object) {
    throw new Error('styles must be of type Object');
  }

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      element.style[key] = styles[key];
    }
  }
};
