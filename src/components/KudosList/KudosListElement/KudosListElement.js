import React from "react";
import ReactTooltip from "react-tooltip";

const KudosListElement = ({ id, onChange, value, img, style }) => {
  return (
    <>
      <input
        type="radio"
        name="kudosElement"
        id={id}
        onChange={onChange}
        value={value}
        data-img={img}
      />
      <label htmlFor={id} data-tip="Wybierz wzorzec" data-place="right">
        <div className={style.kudosListText}>
          <p>{value}</p>
          <p>Imię i nazwisko</p>
        </div>
        <div className={style.kudosListImg}>
          <img src={img} alt={value} />
        </div>
        <ReactTooltip effect="solid" type="info" />
      </label>
    </>
  );
};

export default KudosListElement;
