import React from "react";

import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import MyDropdown from "../components/myDropdown";
import book_chapters_verses from "../data/verses_and_chapters_per_book.json";
import chapters_verses from "../data/verses_per_chapter.json";
import c from "../data/constants.json";

export interface VerseSelectProps {
  role: string;
}

const getBookNames = (): string[] => book_chapters_verses.map(b => b.name);
const getChaptersFor = (bookName: string): number[] => {
  const book = book_chapters_verses.find(el => el.name === bookName);

  const chapters = [];
  for (let i = 1; i <= book!.chapters; i++) {
    chapters.push(i);
  }

  return chapters;
};
const getVersesFor = (bookName: string, chapter: number): number[] => {
  const book: any = chapters_verses.find(el => el.name === bookName);
  const chaptersInBook = book[chapter.toString()];

  const versesInChapter = [];
  for (let i = 1; i <= chaptersInBook!; i++) {
    versesInChapter.push(i);
  }

  return versesInChapter;
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
