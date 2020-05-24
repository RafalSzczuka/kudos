import React from "react";

const KudosListElement = ({ id, onChange, value, img, style }) => {
  return (
    <>
      <input
        type="radio"
        name="kudosElement"
        id={id}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>
        <div className={style.kudosListText}>
          <p>{value}</p>
          <p>Imię i nazwisko</p>
        </div>
        <div className={style.kudosListImg}>
          <img src={img} alt={value} />
        </div>
      </label>
    </>
  );
};

export default KudosListElement;
