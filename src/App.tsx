import React from "react";

import { Provider } from "react-redux";
import { Grid, Row, Col } from "rsuite";

import BookInformation from "./components/bookInformation";
import VerseSelect from "./components/verseSelect";
import Result from "./components/result";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid className="main" fluid>
        <Row>
          <Col md={6} sm={12}>
            <VerseSelect title={"Starting Point"} role="start" />
          </Col>
          <Col md={6} sm={12}>
            <VerseSelect title={"Ending Point"} role="end" />
          </Col>
          <Col md={6} sm={12}>
            <Result />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <BookInformation role="start" />
          </Col>
          <Col md={6} sm={12}>
            <BookInformation role="end" />
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
};

export default App;
