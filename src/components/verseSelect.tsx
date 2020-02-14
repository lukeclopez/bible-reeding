import React, { useState } from "react";

import { Grid, Row, Col, SelectPicker, InputNumber } from "rsuite";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { updateSelection } from "../redux/actions";
import c from "../data/constants.json";
import { getBookNames, getChaptersFor, getVersesFor } from "../utils";

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

    if (!shallowEqual(curSelection, prevSelection)) {
      dispatch(updateSelection(role, type, value));
      setPrevSelection(curSelection);
    }
  };

  const style = { margin: 10 };

  return (
    <Grid fluid>
      <Row>
        <Col>
          <SelectPicker
            defaultValue={book}
            data={getBookNames().map(bookName => {
              return { label: bookName, value: bookName };
            })}
            onChange={value => handleChange(role, c.book, value)}
            cleanable={false}
            style={style}
            block
          />
        </Col>
        <Col>
          <InputNumber
            defaultValue={chapter}
            prefix={c.CHAPTER}
            max={getChaptersFor(book).pop()}
            min={1}
            onChange={value => handleChange(role, c.chapter, value)}
            style={style}
          />
        </Col>
        <Col>
          <InputNumber
            defaultValue={verse}
            prefix={c.VERSE}
            max={getVersesFor(book, chapter).pop()}
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
