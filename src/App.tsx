import React from "react";

import { Provider } from "react-redux";
import { Grid, Row, Col } from "rsuite";

import VerseSelect from "./components/verseSelect";
import BookInformation from "./components/bookInformation";
import Result from "./components/result";
import c from "./data/constants.json";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid className="main" fluid>
        <Row>
          <Col md={6} sm={12}>
            <VerseSelect title={"Starting Point"} role={c.start} />
          </Col>
          <Col md={6} sm={12}>
            <VerseSelect title={"Ending Point"} role={c.end} />
          </Col>
          <Col md={6} sm={12}>
            <Result />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <BookInformation role={c.start} />
          </Col>
          <Col md={6} sm={12}>
            <BookInformation role={c.end} />
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
};

export default App;
