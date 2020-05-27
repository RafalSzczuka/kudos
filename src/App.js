import React from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./Pages/Pages";

import "./styles/all.css";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Pages />
    </HashRouter>
  );
}

export default App;
