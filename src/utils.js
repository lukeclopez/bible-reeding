import bookData from "./data/bookData.json";

export const range = (start, end) => {
  const arr = [];
  for (var i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
};

export const shallowCompare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const sameAmountOfKeys = keys1.length === keys2.length;
  const sameKeys = keys1.every(key => obj2.hasOwnProperty(key));
  const sameValues = keys1.every(key => obj1[key] === obj2[key]);

  return sameAmountOfKeys && sameKeys && sameValues;
};

export const getBookNames = () => Object.keys(bookData);
