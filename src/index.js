import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./App.css";

function Timer() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
