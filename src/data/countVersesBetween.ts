import { shallowEqual } from "react-redux";

import { range, getBookNames } from "../utils";
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
  if (shallowEqual(starting, ending)) {
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
  const bookNames = getBookNames();

  // Find the indexes of the books between the starting book and ending book.
  const startingIndex = bookNames.indexOf(starting.book);
  const endingIndex = bookNames.indexOf(ending.book);
  const bookIndexes = range(startingIndex, endingIndex + 1);

  // For each of those books, add their verses to our count.
  // Note that this includes the last book in our range.
  // Example: Matthew 1:1 to John 1:1 includes all verses from Matt, Mark, Luke, and John.
  let totalVerses = 0;
  bookIndexes.forEach(i => {
    totalVerses += bookData[bookNames[i]].verses;
  });

  // Any chapters and verses that fall before our starting chapter and verse should
  // be excluded from our count.
  // Example: If our range is Matthew 5:2 to John 1:1, we must subtract all verses
  // in Matthew from Matthew 1:1 to Matthew 5:1 because earlier, we added all the
  // verses in Matthew 5:2.
  const chaptersBeforeStarting = range(0, starting.chapter - 1);
  chaptersBeforeStarting.forEach(i => {
    totalVerses -= bookData[starting.book].versesPerChapter[i];
  });
  totalVerses -= starting.verse;

  // Any chapters and verses that fall after our ending chapter and verse should
  // be excluded from our count.
  // Example: If our range is Matthew 1:1 to John 5:1, we must subtract all verses
  // in John from John 5:2 to the end of the book because earlier, we added all the
  // verses in John.
  const chaptersAfterEnding = range(
    ending.chapter,
    bookData[ending.book].chapters
  );
  chaptersAfterEnding.forEach(c => {
    const versesInChapter = bookData[ending.book][c];
    totalVerses -= versesInChapter;
  });
  const versesInEndingChapter =
    bookData[ending.book]["versesPerChapter"][ending.chapter - 1];
  totalVerses -= versesInEndingChapter - ending.verse;

  // Expecting: 1 John 1:1 to Rev 22:21 = 561
  return totalVerses;
};

const countVersesBetween = (
  starting: BookChapterVerse,
  ending: BookChapterVerse
): number => {
  if (starting.book === ending.book) {
    return inSameBook(starting, ending);
  } else {
    return inDifferentBooks(starting, ending);
  }
};

export default countVersesBetween;
