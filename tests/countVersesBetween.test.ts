import countVersesBetween from "./../src/data/countVersesBetween";

const firstJohn11 = { book: "1 John", chapter: 1, verse: 1 };
const rev2221 = { book: "Revelation", chapter: 22, verse: 21 };

const tit11 = { book: "Titus", chapter: 1, verse: 1 };
const tit315 = { book: "Titus", chapter: 3, verse: 15 };

const description =
  "Should return $verses for $start.book $start.chapter:$start.verse and" +
  " $end.book $end.chapter:$end.verse #integration";

test.each`
  start          | end        | verses
  ${firstJohn11} | ${rev2221} | ${561}
  ${tit11}       | ${tit315}  | ${46}
`(description, ({ start, end, verses }) => {
  const verseCount = countVersesBetween(start, end);

  expect(verseCount).toBe(verses);
});
