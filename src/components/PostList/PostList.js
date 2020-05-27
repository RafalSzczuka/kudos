import React, { Component } from "react";
import Post from "../Post/Post";
import initialialPosts from "../../database/posts";

let posts;

// posts feed are updated in every post list render cycle

class PostList extends Component {
  updateFeed = () => {
    if (!localStorage.getItem("posts")) {
      posts = initialialPosts;
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      var rawData = localStorage.getItem("posts");
      posts = JSON.parse(rawData);
    }
  };

  render() {
    this.updateFeed();

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
        groupIco={post.groupIco}
        likes={post.likes}
        key={index}
      />
    ));
    return <>{list}</>;
  }
}

export default PostList;
