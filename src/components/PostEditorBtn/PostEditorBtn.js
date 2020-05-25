import React from "react";
import { Link } from "react-router-dom";
import users from "../../database/users";
import postEditorStyle from "./postEditorBtn.module.scss";

const activeUser = users.filter((user) => user.active)[0];

const PostEditorBtn = () => {
  return (
    <Link to="/edit" className={postEditorStyle.editButton}>
      <img src={activeUser.avatar} alt={activeUser.display} />
      <p>Kliknij aby dodać post</p>
    </Link>
  );
};

export default PostEditorBtn;
