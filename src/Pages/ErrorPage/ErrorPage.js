import React from "react";
import { motion } from "framer-motion";

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
      Error 404 page
    </motion.div>
  );
};

export default ErrorPage;
