// I chose to test internals because I'm running into
// bugs that are hard to track down.

import { countChaptersFor, countVersesForChapter } from "../src/utils";

test.each`
  book            | chapters
  ${"Genesis"}    | ${50}
  ${"Exodus"}     | ${40}
  ${"Psalms"}     | ${150}
  ${"Revelation"} | ${22}
`("Should return $chapters for $book", ({ book, chapters }) => {
  const chapterCount = countChaptersFor(book);

  expect(chapterCount).toBe(chapters);
});

test.each`
  book            | chapter | verses
  ${"Genesis"}    | ${50}   | ${26}
  ${"Exodus"}     | ${40}   | ${38}
  ${"Psalms"}     | ${119}  | ${176}
  ${"Revelation"} | ${22}   | ${21}
`("Should return $verses for $book $chapter", ({ book, chapter, verses }) => {
  const verseCount = countVersesForChapter(book, chapter);

  expect(verseCount).toBe(verses);
});
