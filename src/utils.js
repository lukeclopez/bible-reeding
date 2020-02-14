import bookData from "./data/bookData.json";

export const range = (start, end) => {
  const arr = [];
  for (var i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
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
