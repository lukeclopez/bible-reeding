import React from "react";

import { Provider } from "react-redux";
import { Container, Grid, Row } from "rsuite";

import VerseSelect from "./components/verseSelect";
import Result from "./components/result";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Container className="main">
        <Grid fluid>
          <Row>Starting Point</Row>
          <Row>
            <VerseSelect role="start" />
          </Row>
          <Row>Ending Point</Row>
          <Row>
            <VerseSelect role="end" />
          </Row>
          <Row>
            <Result />
          </Row>
        </Grid>
      </Container>
    </Provider>
  );
};

export default App;
