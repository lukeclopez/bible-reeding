import React, { useState } from "react";

import { Row } from "rsuite";
import { useSelector } from "react-redux";
import deepEqual from "deep-equal";

import { Roles } from "./verseSelect";
import InfoPanel from "./infoPanel";
import { getBookNames, countChaptersFor, countVersesForBook } from "../utils";

export interface BookInfoProps {
  role: Roles;
}

const BookInfo: React.SFC<BookInfoProps> = ({ role }) => {
  const [prevState, setPrevState] = useState<any>(null);
  const eqChecker = (state: any) => {
    if (!deepEqual(state, prevState)) {
      setPrevState(state);
      return false;
    }
    return true;
  };
  const globalSelection = useSelector((state: any) => state[role], eqChecker);

  const { book } = globalSelection;
  const chapters = countChaptersFor(book);

  return (
    <InfoPanel>
      <Row className="header">{book}</Row>
      <Row>Book № {getBookNames().indexOf(book) + 1}</Row>
      <Row>
        {chapters} chapter{chapters > 1 && "s"}, {countVersesForBook(book)}{" "}
        verses
      </Row>
    </InfoPanel>
  );
};

export default BookInfo;
