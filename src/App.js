import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import HomePage from "./Pages/HomePage/HomePage";
import PostEditorPage from "./Pages/PostEditorPage/PostEditorPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

import "./styles/all.css";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/edit" component={PostEditorPage} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
