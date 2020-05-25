import React from "react";
import homePageStyles from "./HomePage.module.scss";
import PostEditorBtn from "../../components/PostEditorBtn/PostEditorBtn";
import Post from "../../components/Post/Post";

const HomePage = () => {
  return (
    <div className={homePageStyles.container}>
      <PostEditorBtn />
      <Post />
    </div>
  );
};

export default HomePage;
