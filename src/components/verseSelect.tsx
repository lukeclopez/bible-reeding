import React from "react";

import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import MyDropdown from "../components/myDropdown";
import { range } from "../utils";
import data from "../data/bookData.json";
import c from "../data/constants.json";

export interface VerseSelectProps {
  role: string;
}

const bookData: { [index: string]: any } = data;

const getBookNames = (): string[] => Object.keys(bookData);

const getChaptersFor = (bookName: string): number[] => {
  return range(1, bookData[bookName]["chapters"] + 1);
};

const getVersesFor = (bookName: string, chapter: number): number[] => {
  // Subtract one to get the correct index of the chapter.
  // Example: Chapter 1 has index 0.
  const verseCount = bookData[bookName]["versesPerChapter"][chapter - 1];
  return range(1, verseCount + 1);
};

const VerseSelect: React.SFC<VerseSelectProps> = ({
  role
}: VerseSelectProps) => {
  const selection = useSelector((state: any) => {
    const book = state[role + c.BOOK];
    const chapter = state[role + c.CHAPTER];
    const verse = state[role + c.VERSE];

    return { book, chapter, verse };
  });

  return (
    <Row>
      <Col>
        <MyDropdown title={c.BOOK} role={role} options={getBookNames()} />
      </Col>
      <Col>
        <MyDropdown
          title={c.CHAPTER}
          role={role}
          options={getChaptersFor(selection.book)}
        />
      </Col>
      <Col>
        <MyDropdown
          title="Verse"
          role={role}
          options={getVersesFor(selection.book, selection.chapter)}
        />
      </Col>
    </Row>
  );
};

export default VerseSelect;
