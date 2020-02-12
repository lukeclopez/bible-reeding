import { range, shallowCompare, getBookNames } from "../utils";
import data from "./bookData.json";

interface BookChapterVerse {
  book: string;
  chapter: number;
  verse: number;
}

interface BookData {
  chapters: number;
  verses: number;
  versesPerChapter: number[];
  [index: string]: any;
}

const bookData: { [index: string]: any } = data;

const inSameBook = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  if (shallowCompare(starting, ending)) {
    return 1;
  }

  let versesRead = 0;
  let firstChapter = true;
  const book: BookData = bookData[starting.book];

  for (var i = starting.chapter; i < ending.chapter; i++) {
    const ch = i.toString();

    if (firstChapter) {
      const versesInChapter: number = book[ch];
      const excludeVerses = starting.verse;
      versesRead += versesInChapter - excludeVerses;
      firstChapter = false;
    } else {
      versesRead += book[ch];
    }
  }
  versesRead += ending.verse;

  return versesRead;
};

const inDifferentBooks = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  const books = getBookNames();

  // Find the indexes of the books between the starting book and ending book.
  const startingIndex = books.indexOf(starting.book);
  const endingIndex = books.indexOf(ending.book);
  const bookIndexes = range(startingIndex, endingIndex);

  // For each of those books, add their verses to our count.
  let totalVerses = 0;
  books.forEach(b => {
    totalVerses += bookData[b];
  });

  // Subtract excluded chapters and verses.
  // Example: If we start at Genesis 3:3, 1:1 until 3:2 are excluded.
  const excludedChapters = range(1, starting.chapter);
  let excludedVerses = 0;
  excludedChapters.forEach(i => {
    // TODO: Reformat the data to make the code more elegant.
  });
  totalVerses -= starting.verse;
  // TODO: Add the chapters and verses after the last book that should be included.
  totalVerses += ending.verse;

  // Expecting: Matthew 1:1 to Mark 16:20 = 1749
  return totalVerses;
};

const countVersesBetween = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  let versesRead = 0;

  if (starting.book === ending.book) {
    versesRead = inSameBook(starting, ending);
  } else {
    versesRead = inDifferentBooks(starting, ending);
  }

  return versesRead;
};

export default countVersesBetween;
