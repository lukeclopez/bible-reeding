import React, { useState } from "react";

import { Grid, Row, Col, SelectPicker, InputNumber } from "rsuite";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { updateSelection } from "../redux/actions";
import c from "../data/constants.json";
import { getBookNames, countChaptersFor, countVersesFor } from "../utils";

export interface VerseSelectProps {
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
  role
}: VerseSelectProps) => {
  const globalSelection = useSelector((state: any) => state);
  const { book, chapter, verse } = globalSelection[role];
  const [prevSelection, setPrevSelection] = useState<BookData>(globalSelection);

  const dispatch = useDispatch();

  const handleChange = (role: string, type: string, value: StringOrNum) => {
    const curSelection: BookData = { ...globalSelection };
    curSelection[type] = value;

    if (!shallowEqual(curSelection, prevSelection)) {
      dispatch(updateSelection(role, type, value));
      setPrevSelection(curSelection);
    }
  };

  const bookNames = getBookNames();
  const style = { margin: 10 };

  const disableBooks = (role: string): string[] => {
    const otherRole = role === c.start ? c.end : c.start;
    const cutOffBook = globalSelection[otherRole].book;
    const cutOffIndex = bookNames.indexOf(cutOffBook);

    if (role === c.start) {
      return bookNames.slice(cutOffIndex);
    }
    return bookNames.slice(0, cutOffIndex);
  };

  return (
    <Grid fluid>
      <Row>
        <Col>
          <SelectPicker
            value={book}
            data={bookNames.map(bookName => {
              return { label: bookName, value: bookName };
            })}
            onChange={value => handleChange(role, c.book, value)}
            cleanable={false}
            style={style}
            block
            disabledItemValues={disableBooks(role)}
          />
        </Col>
        <Col>
          <InputNumber
            value={chapter}
            prefix={c.CHAPTER}
            max={countChaptersFor(book)}
            min={1}
            onChange={value => handleChange(role, c.chapter, value)}
            style={style}
          />
        </Col>
        <Col>
          <InputNumber
            value={verse}
            prefix={c.VERSE}
            max={countVersesFor(book, chapter)}
            min={1}
            onChange={value => handleChange(role, c.verse, value)}
            style={style}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default VerseSelect;
