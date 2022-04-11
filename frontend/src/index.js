import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <main style={{ position: "relative", overflowX: "hidden" }}>
      <App />
    </main>
  </Router>,
  document.getElementById("root")
);
