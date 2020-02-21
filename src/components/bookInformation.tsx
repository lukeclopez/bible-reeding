import React, { useState } from "react";

import { Container, Grid, Row, Panel } from "rsuite";
import { useSelector } from "react-redux";
import deepEqual from "deep-equal";

import { getBookNames, countChaptersFor, countVersesForBook } from "../utils";

export interface BookInformationProps {
  role: string;
}

const BookInformation: React.SFC<BookInformationProps> = ({ role }) => {
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
    <Panel className="book-info bg" shaded>
      <Container>
        <Grid fluid>
          <Row className="header">
            <b>{book}</b>
          </Row>
          <Row>Book № {getBookNames().indexOf(book) + 1}</Row>
          <Row>
            {chapters} chapter{chapters > 1 && "s"}, {countVersesForBook(book)}{" "}
            verses
          </Row>
        </Grid>
      </Container>
    </Panel>
  );
};

export default BookInformation;
