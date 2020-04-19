export const parseQuery = (url) => {
  return url
    .replace(/[/?]/g, '')
    .split('&')
    .reduce((acc, curr) => {
      const keyVal = curr.split('=');
      if (keyVal.length === 2) acc[keyVal[0]] = keyVal[1];
      return acc;
    }, {});
};