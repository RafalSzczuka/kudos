import React from "react";
import Post from "../Post/Post";
import posts from "../../database/posts";

const list = posts.map((post) => (
  <Post
    img={post.img}
    user={post.user}
    timestamp={post.timestamp}
    txt={post.txt}
    kudos={post.kudos}
    kudosImg={post.kudosImg}
    mention={post.mention}
    group={post.group}
    likes={post.likes}
    key={post.user}
  />
));

const PostList = () => {
  return <>{list}</>;
};

export default PostList;
