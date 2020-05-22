import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import PostEditorPage from "./Pages/PostEditorPage/PostEditorPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/edit" component={PostEditorPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
