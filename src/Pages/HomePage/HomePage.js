import React from "react";
import homePageStyles from "./HomePage.module.scss";
import PostEditorBtn from "../../components/PostEditorBtn/PostEditorBtn";
import PostList from "../../components/PostList/PostList";

const HomePage = () => {
  return (
    <div className={homePageStyles.container}>
      <PostEditorBtn />
      <PostList />
    </div>
  );
};

export default HomePage;
