import React from "react";
import PostEditor from "../../components/PostEditor/PostEditor";
import users from "../../database/users";

const PostEditorPage = () => {
  return (
    <>
      <PostEditor users={users} />
    </>
  );
};

export default PostEditorPage;
