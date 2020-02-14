import React, { useState, useEffect } from "react";

import { Row, Col } from "reactstrap";
import { SelectPicker, InputNumber } from "rsuite";
import { useSelector, useDispatch } from "react-redux";

import {
  shallowCompare,
  getBookNames,
  getChaptersFor,
  getVersesFor
} from "../utils";
import { updateSelection } from "../redux/actions";
import c from "../data/constants.json";

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
  const globalSelection = useSelector((state: any) => state[role]);
  const { book, chapter, verse } = globalSelection;
  const [prevSelection, setPrevSelection] = useState<BookData>(globalSelection);

  const dispatch = useDispatch();

  const handleChange = (role: string, type: string, value: StringOrNum) => {
    const curSelection: BookData = { ...globalSelection };
    curSelection[type] = value;

    if (!shallowCompare(curSelection, prevSelection)) {
      dispatch(updateSelection(role, type, value));
      setPrevSelection(curSelection);
    }
  };

  return (
    <Row>
      <Col>
        <SelectPicker
          defaultValue={book}
          data={getBookNames().map(bookName => {
            return { label: bookName, value: bookName };
          })}
          style={{ width: 224 }}
          onChange={value => handleChange(role, c.book, value)}
        />
      </Col>
      <Col>
        <InputNumber
          defaultValue={chapter}
          prefix={c.CHAPTER}
          max={getChaptersFor(book).pop()}
          min={1}
          onChange={value => handleChange(role, c.chapter, value)}
        />
      </Col>
      <Col>
        <InputNumber
          defaultValue={verse}
          prefix={c.VERSE}
          max={getVersesFor(book, chapter).pop()}
          min={1}
          onChange={value => handleChange(role, c.verse, value)}
        />
      </Col>
    </Row>
  );
};

export default VerseSelect;
