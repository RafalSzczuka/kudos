import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./HomePage/HomePage";
import PostEditorPage from "./PostEditorPage/PostEditorPage";
import ErrorPage from "./ErrorPage/ErrorPage";

const Pages = () => {
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
};

export default Pages;
