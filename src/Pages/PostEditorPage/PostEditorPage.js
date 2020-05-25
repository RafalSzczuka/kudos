import React from "react";
import PostEditor from "../../components/PostEditor/PostEditor";
import users from "../../database/users";
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
      <PostEditor users={users} />
    </motion.div>
  );
};

export default PostEditorPage;
