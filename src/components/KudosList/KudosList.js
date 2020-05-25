import React from "react";
import KudosListElement from "./KudosListElement/KudosListElement";
import kudosListStyle from "./kudosList.module.scss";
import data from "../../database/kudosElements";

const KudosList = ({ onChange }) => {
  const list = data.map((element) => (
    <KudosListElement
      onChange={onChange}
      id={element.id}
      value={element.value}
      img={element.img}
      style={kudosListStyle}
      key={element.id}
    />
  ));
  return (
    <>
      <label htmlFor="kudos">
        Wybierz kudos
        <div className={kudosListStyle.kudosList}>{list}</div>
      </label>
    </>
  );
};

export default KudosList;
