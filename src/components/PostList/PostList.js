import React from "react";
import Post from "../Post/Post";
import initialialPosts from "../../database/posts";

let posts;

if (!localStorage.getItem("posts")) {
  posts = initialialPosts;
  localStorage.setItem("posts", JSON.stringify(posts));
} else {
  var rawData = localStorage.getItem("posts");
  posts = JSON.parse(rawData);
}

const list = posts.map((post, index) => (
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
    key={index}
  />
));

const PostList = () => {
  return <>{list}</>;
};

export default PostList;
