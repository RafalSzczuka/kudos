import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import HomePage from "./Pages/HomePage/HomePage";
import PostEditorPage from "./Pages/PostEditorPage/PostEditorPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

import "./styles/all.css";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={HomePage} />
        <Route path="/edit" component={PostEditorPage} />
        <Route component={ErrorPage} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
