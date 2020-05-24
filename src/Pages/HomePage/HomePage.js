import React from "react";
import { Link } from "react-router-dom";
import homePageStyles from "./HomePage.module.scss";
import users from "../../database/users";

const HomePage = () => {
  return (
    <div className={homePageStyles.container}>
      <Link to="/edit" className={homePageStyles.editButton}>
        <img src={users[5].avatar} alt="" />
        <p>Kliknij aby dodać post</p>
      </Link>
    </div>
  );
};

export default HomePage;
