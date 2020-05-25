import React from "react";
import { Link } from "react-router-dom";
import publishBtnStyle from "./publishBtn.module.scss";

const PublishBtn = ({ valid, handler }) => {
  return (
    <button className={publishBtnStyle.publishBtn} onClick={handler}>
      {valid ? (
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Opublikuj
        </Link>
      ) : (
        "Opublikuj"
      )}
    </button>
  );
};

export default PublishBtn;
