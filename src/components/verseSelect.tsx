import * as React from "react";

import { Row, Col } from "reactstrap";

import MyDropdown from "../components/myDropdown";
import book_chapters_verses from "../data/verses_and_chapters_per_book.json";
import chapters_verses from "../data/verses_per_chapter.json";

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
  return (
    <Row>
      <Col>
        <MyDropdown title="Book" role={role} options={getBookNames()} />
      </Col>
      <Col>
        <MyDropdown
          title="Chapter"
          role={role}
          options={getChaptersFor("Genesis")}
        />
      </Col>
      <Col>
        <MyDropdown
          title="Verse"
          role={role}
          options={getVersesFor("Genesis", 1)}
        />
      </Col>
    </Row>
  );
};

export default VerseSelect;
