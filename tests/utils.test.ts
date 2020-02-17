import { countChaptersFor } from "../src/utils";

// I chose to test internals because I'm running into
// bugs that are hard to track down.
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
