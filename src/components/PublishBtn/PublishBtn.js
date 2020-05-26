import React from "react";
import publishBtnStyle from "./publishBtn.module.scss";

const PublishBtn = ({ valid, handler }) => {
  return (
    <button className={publishBtnStyle.publishBtn} onClick={handler}>
      {valid ? (
        <div
          className="spinner-border"
          role="status"
          style={{ width: "25px", height: "25px" }}
        ></div>
      ) : (
        "Opublikuj"
      )}
    </button>
  );
};

export default PublishBtn;
