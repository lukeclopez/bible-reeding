import React from "react";

import { Provider } from "react-redux";
import { Grid, Row } from "rsuite";

import VerseSelect from "./components/verseSelect";
import Result from "./components/result";
import store from "./redux/store";
import "./css/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Grid fluid>
            <Row>How many verses are between</Row>
            <Row>
              <VerseSelect role="start" />
            </Row>
            <Row>and</Row>
            <Row>
              <VerseSelect role="end" />
            </Row>
            <Row>?</Row>
            <Row>
              <Result />
            </Row>
          </Grid>
        </header>
      </div>
    </Provider>
  );
};

export default App;
