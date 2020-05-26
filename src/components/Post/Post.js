import React, { useState } from "react";
import postStyle from "./post.module.scss";
import Moment from "react-moment";
import ReactTooltip from "react-tooltip";
import "moment/locale/pl";
import users from "../../database/users";
import agreement from "../../assets/agreement.svg";
import gif from "../../assets/gif.svg";
import attachment from "../../assets/attachment.svg";

const activeUser = users.filter((user) => user.active)[0];

function createMarkup(txt) {
  return { __html: txt };
}

const Post = ({
  img,
  user,
  timestamp,
  txt,
  kudos,
  kudosImg,
  mention,
  group,
  groupIco,
  likes,
}) => {
  let [counter, setCounter] = useState(0);

  return (
    <div className={postStyle.post}>
      <div className={postStyle.header}>
        <img className={postStyle.avatar} src={img} alt={user}></img>
        <h3>{user}</h3>
        <div className={postStyle.agreement}>
          <img src={agreement} alt="agreement" />
        </div>

        <p>
          <Moment locale="pl" fromNow>
            {timestamp}
          </Moment>
        </p>
      </div>
      <div
        className={postStyle.txt}
        dangerouslySetInnerHTML={createMarkup(txt)}
      ></div>
      <div className={postStyle.kudos}>
        <div className={postStyle.kudosImg}>
          <img src={kudosImg} alt={kudos} />
        </div>
        <div className={postStyle.kudosTxt}>
          <p>{kudos}</p>
          <h2>{mention}</h2>
        </div>
      </div>
      <div className={postStyle.footer}>
        <div className={postStyle.group}>
          <div className={postStyle.groupIcon}>
            <i className={groupIco}></i>
          </div>
          <span>{group}</span>
        </div>
        <div className={postStyle.options}>
          <i
            className="fas fa-heart"
            onClick={() => setCounter(++counter)}
            data-tip="Lubię to!"
            data-place="left"
          ></i>
          <span>{(likes += counter)}</span>
          <i
            className="fas fa-comment-alt"
            data-tip="Dodaj komentarz"
            data-place="top"
          ></i>
          <span>0</span>
          <i
            className="fas fa-ellipsis-v"
            data-tip="Opcje"
            data-place="right"
          ></i>
        </div>
        <ReactTooltip effect="solid" type="info" />
      </div>
      <hr />
      <div className={postStyle.addComment}>
        <img
          className={postStyle.commentAvatar}
          src={activeUser.avatar}
          alt={activeUser.display}
        />
        <input type="text" placeholder="Napisz komentarz..." />
        <div className={postStyle.commentIcons}>
          <div>
            <img src={gif} alt="gif icon" />
          </div>
          <div>
            <i className="far fa-smile"></i>
          </div>
          <div>
            <img src={attachment} alt="gif icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
