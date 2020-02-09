import * as React from "react";
import { Row, Col } from "reactstrap";

import MyDropdown from "../components/myDropdown";
import book_chapters_verses from "../data/verses_and_chapters_per_book.json";
import chapters_verses from "../data/verses_per_chapter.json";

export interface VerseSelectProps {}

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
  const book = chapters_verses.find(el => el.name === bookName);
  const chaptersInBook = book!["17"];

  const versesInChapter = [];
  for (let i = 1; i <= chaptersInBook!; i++) {
    versesInChapter.push(i);
  }

  return versesInChapter;
};

const VerseSelect: React.SFC<VerseSelectProps> = () => {
  return (
    <Row>
      <Col>
        <MyDropdown title="Book" options={getBookNames()} />
      </Col>
      <Col>
        <MyDropdown title="Chapter" options={getChaptersFor("Genesis")} />
      </Col>
      <Col>
        <MyDropdown title="Verse" options={getVersesFor("Genesis", 1)} />
      </Col>
    </Row>
  );
};

export default VerseSelect;
