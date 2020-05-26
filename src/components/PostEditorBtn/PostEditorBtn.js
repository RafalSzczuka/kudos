import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import users from "../../database/users";
import postEditorStyle from "./postEditorBtn.module.scss";
import agreement from "../../assets/agreement.svg";

const activeUser = users.filter((user) => user.active)[0];

const PostEditorBtn = () => {
  return (
    <Link
      to="/edit"
      className={postEditorStyle.editButton}
      data-tip="Otwórz edytor"
      data-place="bottom"
    >
      <ReactTooltip effect="solid" type="info" />
      <img
        className={postEditorStyle.avatar}
        src={activeUser.avatar}
        alt={activeUser.display}
      />
      <p>Kliknij aby dodać post</p>
      <div className={postEditorStyle.agreement}>
        <img src={agreement} alt="agreement" />
      </div>
    </Link>
  );
};

export default PostEditorBtn;
