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

export const getChaptersFor = bookName => {
  return range(1, bookData[bookName]["chapters"] + 1);
};

export const getVersesFor = (bookName, chapter) => {
  // Subtract one to get the correct index of the chapter.
  // Example: Chapter 1 has index 0.
  const verseCount = bookData[bookName]["versesPerChapter"][chapter - 1];
  return range(1, verseCount + 1);
};

export const getBookNames = () => Object.keys(bookData);
