import React from "react";
import { Link } from "react-router-dom";
import hands from "../../../assets/hands.svg";
import close from "../../../assets/close.svg";
import headerStyle from "./header.module.scss";

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <img className={headerStyle.icon} src={hands} alt="Kudos icon" />
      <Link className={headerStyle.close} to="/">
        <img src={close} alt="close" />
      </Link>
      <h2>utwórz kudos</h2>
    </div>
  );
};

export default Header;
