import React from "react";
import postStyle from "./post.module.scss";
import ReactTooltip from "react-tooltip";

import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import PostFooter from "./PostFooter/PostFooter";
import CommentInput from "./CommentInput/CommentInput";

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
  return (
    <div className={postStyle.post}>
      <ReactTooltip effect="solid" type="info" />
      <PostHeader img={img} user={user} timestamp={timestamp} />
      <PostBody kudosImg={kudosImg} kudos={kudos} mention={mention} txt={txt} />
      <PostFooter groupIco={groupIco} group={group} likes={likes} />
      <CommentInput />
    </div>
  );
};

export default Post;
