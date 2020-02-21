import bookData from "./data/bookData.json";

const allBooks: { [index: string]: any } = bookData;

export const range = (start: number, end: number): number[] => {
  const arr = [];
  for (var i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
};

export const countChaptersFor = (bookName: string): number => {
  return allBooks[bookName].chapters;
};

export const countVersesForChapter = (
  bookName: string,
  chapter: number
): number => {
  // Subtract one to get the correct index of the chapter.
  // Example: Chapter 1 has index 0.
  return allBooks[bookName]["versesPerChapter"][chapter - 1];
};

export const countVersesForBook = (bookName: string): number => {
  return allBooks[bookName]["verses"];
};

export const getBookNames = () => Object.keys(allBooks);
