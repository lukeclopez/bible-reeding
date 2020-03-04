import React from "react";

import { Provider } from "react-redux";
import { Grid, Row, Col } from "rsuite";

import VerseSelect, { Roles } from "./components/verseSelect";
import BookInfo from "./components/bookInfo";
import Result from "./components/result";
import About from "./components/about";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid className="main" fluid>
        <Row>
          <Col md={6} sm={12}>
            <VerseSelect title={"Starting Point"} role={Roles.Start} />
          </Col>
          <Col md={6} sm={12}>
            <VerseSelect title={"Ending Point"} role={Roles.End} />
          </Col>
          <Col md={6} sm={12}>
            <Result />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <BookInfo role={Roles.Start} />
          </Col>
          <Col md={6} sm={12}>
            <BookInfo role={Roles.End} />
          </Col>
          <Col md={6} sm={12}>
            <About />
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
};

export default App;
