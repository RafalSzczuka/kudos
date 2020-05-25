import React, { useState } from "react";
import postStyle from "./post.module.scss";
import posts from "../../database/posts";
import Moment from "react-moment";
import "moment/locale/pl";
import users from "../../database/users";

const activeUser = users.filter((user) => user.active)[0];

const post = posts[0];

function createMarkup(txt) {
  return { __html: txt };
}

const Post = () => {
  let [counter, setCounter] = useState(0);

  return (
    <div className={postStyle.post}>
      <div className={postStyle.header}>
        <img src={post.img} alt={post.user}></img>
        <h3>{post.user}</h3>
        <p>
          <Moment locale="pl" fromNow>
            {post.timestamp}
          </Moment>
        </p>
      </div>
      <div
        className={postStyle.txt}
        dangerouslySetInnerHTML={createMarkup(post.txt)}
      ></div>
      <div className={postStyle.kudos}>
        <div className={postStyle.kudosImg}>
          <img src={post.kudosImg} alt={post.kudos} />
        </div>
        <div className={postStyle.kudosTxt}>
          <p>{post.kudos}</p>
          <h2>{post.mention}</h2>
        </div>
      </div>
      <div className={postStyle.footer}>
        <div className={postStyle.group}>
          <div className={postStyle.groupIcon}>
            <i className="fas fa-city"></i>
          </div>
          <span>{post.group}</span>
        </div>
        <div className={postStyle.options}>
          <i className="fas fa-heart" onClick={() => setCounter(++counter)}></i>
          <span>{counter}</span>
          <i className="fas fa-comment-alt"></i>
          <span>0</span>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <hr />
      <div className={postStyle.addComment}>
        <img src={activeUser.avatar} alt={activeUser.display} />
        <input type="text" placeholder="Napisz komentarz..." />
      </div>
    </div>
  );
};

export default Post;
