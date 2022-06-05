import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";
import Theme from "./components/Theme/Theme";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <Theme />
  </React.StrictMode>,
  document.getElementById("root")
);
