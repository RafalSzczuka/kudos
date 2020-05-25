import React from "react";
import homePageStyles from "./HomePage.module.scss";
import PostEditorBtn from "../../components/PostEditorBtn/PostEditorBtn";

const HomePage = () => {
  return (
    <div className={homePageStyles.container}>
      <PostEditorBtn />
    </div>
  );
};

export default HomePage;
