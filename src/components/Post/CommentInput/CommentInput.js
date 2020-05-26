import React from "react";
import commentInputStyle from "./commentInput.module.scss";
import users from "../../../database/users";
import gif from "../../../assets/gif.svg";
import attachment from "../../../assets/attachment.svg";

const activeUser = users.filter((user) => user.active)[0];

const CommentInput = () => {
  return (
    <div className={commentInputStyle.addComment}>
      <img
        className={commentInputStyle.commentAvatar}
        src={activeUser.avatar}
        alt={activeUser.display}
      />
      <input type="text" placeholder="Napisz komentarz..." />
      <div className={commentInputStyle.commentIcons}>
        <div>
          <img
            src={gif}
            alt="gif icon"
            data-tip="Dodaj gif"
            data-place="left"
          />
        </div>
        <div>
          <i className="far fa-smile" data-tip="Emoji" data-place="top"></i>
        </div>
        <div>
          <img
            src={attachment}
            alt="gif icon"
            data-tip="Dodaj załącznik"
            data-place="right"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
