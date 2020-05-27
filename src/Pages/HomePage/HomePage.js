import React, { useEffect } from "react";
import homePageStyles from "./HomePage.module.scss";
import PostEditorBtn from "../../components/PostEditorBtn/PostEditorBtn";
import PostList from "../../components/PostList/PostList";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
} from "../../pageTransition/pageTransition";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className={homePageStyles.container}
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PostEditorBtn />
      <PostList />
    </motion.div>
  );
};

export default HomePage;
