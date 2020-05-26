import React from "react";
import Moment from "react-moment";
import "moment/locale/pl";
import agreement from "../../../assets/agreement.svg";
import postHeaderStyle from "./postHeader.module.scss";

const PostHeader = ({ img, user, timestamp }) => {
  return (
    <div className={postHeaderStyle.header}>
      <img className={postHeaderStyle.avatar} src={img} alt={user}></img>
      <h3>{user}</h3>
      <div className={postHeaderStyle.agreement}>
        <img src={agreement} alt="agreement" />
      </div>
      <p>
        <Moment locale="pl" fromNow>
          {timestamp}
        </Moment>
      </p>
    </div>
  );
};

export default PostHeader;
