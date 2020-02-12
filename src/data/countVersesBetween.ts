import book_chapters_verses from "./verses_and_chapters_per_book.json";
import chapters_verses from "./verses_per_chapter.json";
import { range, shallowCompare } from "../utils";

interface BookChapterVerse {
  book: string;
  chapter: number;
  verse: number;
}

interface VersesPerChapter {
  [index: string]: any;
  name: string;
}

export const inSameBook = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  if (shallowCompare(starting, ending)) {
    return 0;
  }

  let versesRead = 0;
  let firstChapter = true;
  const cv: VersesPerChapter[] = chapters_verses;
  const book: VersesPerChapter = cv.find(el => el.name === starting.book)!;

  for (var i = starting.chapter; i < ending.chapter; i++) {
    const ch = i.toString();

    if (firstChapter) {
      const versesInChapter: number = book[ch];
      versesRead += versesInChapter;
      firstChapter = false;
    } else {
      versesRead += book[ch];
    }
  }
  versesRead += ending.verse;

  return versesRead;
};

const getListOfBooks = (): string[] => {
  return book_chapters_verses.map(el => el.name);
};

export const inDifferentBooks = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  const books = getListOfBooks();

  // Find the indexes of the books between the starting book and ending book.
  const startingIndex = books.indexOf(starting.book);
  const endingIndex = books.indexOf(ending.book);
  const bookIndexes = range(startingIndex, endingIndex + 1);

  // For each of those books, add their verses to our count.
  let totalVerses = 0;
  bookIndexes.forEach(i => {
    totalVerses += book_chapters_verses[i].verses;
  });

  // TODO: Subtract the chapters and verses that aren't included
  // Example: If we start at Genesis 3:3, nothing before that point should be included.
  // TODO: Add the chapters and verses after the last book that should be included.

  return totalVerses;
};
