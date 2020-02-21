import React, { useState } from "react";

import { Panel, Grid, Row, SelectPicker, InputNumber } from "rsuite";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { updateSelection } from "../redux/actions";
import c from "../data/constants.json";
import {
  getBookNames,
  countChaptersFor,
  countVersesForChapter
} from "../utils";

export interface VerseSelectProps {
  title: string;
  role: string;
}

interface BookData {
  [index: string]: any;
  book: string;
  chapter: number;
  verse: number;
}

type StringOrNum = string | number;

const VerseSelect: React.SFC<VerseSelectProps> = ({
  title,
  role
}: VerseSelectProps) => {
  const globalSelection = useSelector((state: any) => state[role]);
  const { book, chapter, verse } = globalSelection;
  const [prevSelection, setPrevSelection] = useState<BookData>(globalSelection);

  const dispatch = useDispatch();

  const handleChange = (role: string, type: string, value: StringOrNum) => {
    const curSelection: BookData = { ...globalSelection };
    curSelection[type] = value;

    // This `if` is to ensure that the values
    // come out as `Number`s, not strings.
    if (type !== c.book) {
      value = Number(value);
    }

    if (!shallowEqual(curSelection, prevSelection)) {
      dispatch(updateSelection(role, type, value));
      setPrevSelection(curSelection);
    }
  };

  const bookNames = getBookNames();

  return (
    <Panel className="verse-select bg" shaded>
      <Grid fluid>
        <Row>{title}</Row>
        <Row>
          <SelectPicker
            value={book}
            data={bookNames.map(bookName => {
              return { label: bookName, value: bookName };
            })}
            onChange={value => handleChange(role, c.book, value)}
            cleanable={false}
            className="picker"
          />
        </Row>
        <Row>
          <InputNumber
            value={chapter}
            prefix={c.CHAPTER}
            max={countChaptersFor(book)}
            min={1}
            onChange={value => handleChange(role, c.chapter, value)}
            className="picker"
          />
        </Row>
        <Row>
          <InputNumber
            value={verse}
            prefix={c.VERSE}
            max={countVersesForChapter(book, chapter)}
            min={1}
            onChange={value => handleChange(role, c.verse, value)}
            className="picker"
          />
        </Row>
      </Grid>
    </Panel>
  );
};

export default VerseSelect;
