import React from "react";
import PostEditor from "../../components/PostEditor/PostEditor";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
} from "../../pageTransition/pageTransition";

const PostEditorPage = () => {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PostEditor />
    </motion.div>
  );
};

export default PostEditorPage;
