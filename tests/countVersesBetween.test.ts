import countVersesBetween from "./../src/data/countVersesBetween";

const cases = [
  {
    start: { book: "1 John", chapter: 1, verse: 1 },
    end: { book: "Revelation", chapter: 22, verse: 21 },
    actualCount: 561
  },
  {
    start: { book: "Titus", chapter: 1, verse: 1 },
    end: { book: "Titus", chapter: 3, verse: 15 },
    actualCount: 46
  },
  {
    start: { book: "Titus", chapter: 1, verse: 1 },
    end: { book: "Titus", chapter: 1, verse: 1 },
    actualCount: 1
  },
  {
    start: { book: "Genesis", chapter: 1, verse: 1 },
    end: { book: "Revelation", chapter: 22, verse: 21 },
    actualCount: 31164 // Some translations have 31,102
  }
];

const description = "%O #integration";

test.each(cases)(description, ({ start, end, actualCount }) => {
  const verseCount = countVersesBetween(start, end);

  expect(verseCount).toBe(actualCount);
});
