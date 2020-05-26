import React from "react";
import validationStyle from "./validation.module.scss";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
} from "../../pageTransition/pageTransition";

const ValidationMessage = ({ position, message }) => {
  return (
    <motion.div
      className={validationStyle.validationMessage}
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <span style={position}>{message}</span>
    </motion.div>
  );
};

export default ValidationMessage;
