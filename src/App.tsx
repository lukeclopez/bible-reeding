import React from "react";

import { Row } from "reactstrap";

import VerseSelect from "./components/verseSelect";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Row>How many verses are between</Row>
        <Row>
          <VerseSelect />
        </Row>
        <Row>and</Row>
        <Row>
          <VerseSelect />
        </Row>
        <Row>?</Row>
      </header>
    </div>
  );
};

export default App;
