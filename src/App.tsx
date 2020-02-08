import React from "react";

import { Row, Col } from "reactstrap";

import MyDropdown from "./components/dropdown";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <MyDropdown title="Book" />
          </Col>
          <Col>
            <MyDropdown title="Chapter" />
          </Col>
          <Col>
            <MyDropdown title="Verse" />
          </Col>
        </Row>
      </header>
    </div>
  );
};

export default App;
