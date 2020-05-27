import React from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
import "./styles/all.css";

// hash router added, due to switch to 404 error page problem. It occures only at gh-pages deployed static page.
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Pages />
    </HashRouter>
  );
}

export default App;
