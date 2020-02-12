import * as React from "react";

import { useSelector } from "react-redux";

import { inSameBook } from "../data/countVersesBetween";

export interface ResultProps {}

const Result: React.SFC<ResultProps> = () => {
  const selections = useSelector((state: any) => {
    const {
      startBook,
      startChapter,
      startVerse,
      endBook,
      endChapter,
      endVerse
    } = state;

    return {
      start: { book: startBook, chapter: startChapter, verse: startVerse },
      end: { book: endBook, chapter: endChapter, verse: endVerse }
    };
  });
  const { start, end } = selections;

  const verses = inSameBook(start, end);

  return <>{verses}</>;
};

export default Result;
