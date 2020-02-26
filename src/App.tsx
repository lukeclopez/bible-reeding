import React from "react";

import { Provider } from "react-redux";
import { Grid, Row, Col } from "rsuite";

import BookInfo from "./components/bookInfo";
import VerseSelect from "./components/verseSelect";
import InfoPanel from "./components/infoPanel";
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
            <BookInfo role="start" />
          </Col>
          <Col md={6} sm={12}>
            <BookInfo role="end" />
          </Col>
          <Col md={6} sm={12}>
            <InfoPanel>
              <Row className="header">Something</Row>
            </InfoPanel>
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
};

export default App;
