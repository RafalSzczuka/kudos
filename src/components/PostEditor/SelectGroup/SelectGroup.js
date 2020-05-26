import React from "react";
import selectGroupStyle from "./selectGroup.module.scss";

const SelectGroup = ({ onChange }) => {
  return (
    <label htmlFor="group" className={selectGroupStyle.group}>
      Wybierz grupę
      <select
        className={selectGroupStyle.customSelect}
        name="group"
        onChange={onChange}
      >
        <option value="">wybierz grupę</option>
        <option value="Białystok">Białystok</option>
        <option value="Marketing">Marketing</option>
        <option value="Backend">Backend</option>
      </select>
    </label>
  );
};

export default SelectGroup;
