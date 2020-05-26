import React from "react";
import postBodyStyle from "./postBody.module.scss";

function createMarkup(txt) {
  return { __html: txt };
}

const PostBody = ({ kudosImg, kudos, mention, txt }) => {
  return (
    <>
      <div
        className={postBodyStyle.txt}
        dangerouslySetInnerHTML={createMarkup(txt)}
      ></div>
      <div className={postBodyStyle.kudos}>
        <div className={postBodyStyle.kudosImg}>
          <img src={kudosImg} alt={kudos} />
        </div>
        <div className={postBodyStyle.kudosTxt}>
          <p>{kudos}</p>
          <h2>{mention}</h2>
        </div>
      </div>
    </>
  );
};

export default PostBody;
