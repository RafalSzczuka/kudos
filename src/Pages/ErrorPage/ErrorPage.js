import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import errorPageStyle from "./errorPage.module.scss";

import {
  pageVariants,
  pageTransition,
} from "../../pageTransition/pageTransition";

const ErrorPage = () => {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <div className={errorPageStyle.body}>
          <h3>Nieprawidłowy URL</h3>
          <h4>error 404</h4>
          <p>... tu nic nie ma ...</p>
          <i className="far fa-sad-tear"></i>
          <div className={errorPageStyle.backBtn}>
            <Link to="/">Powrót</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
