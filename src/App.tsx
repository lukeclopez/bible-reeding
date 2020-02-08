import React from "react";

import MyDropdown from "./components/dropdown";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyDropdown title="Book" />
      </header>
    </div>
  );
};

export default App;
