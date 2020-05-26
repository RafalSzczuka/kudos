import React from "react";
import selectGroupStyle from "./selectGroup.module.scss";
import Select from "react-select";

const options = [
  {
    value: "Białystok",
    label: (
      <div>
        <i className="fas fa-city"></i>
        <span>Białystok</span>
      </div>
    ),
  },
  {
    value: "Marketing",
    label: (
      <div>
        <i className="fas fa-search-dollar"></i>
        <span>Marketing</span>
      </div>
    ),
  },
  {
    value: "Backend",
    label: (
      <div>
        <i className="fas fa-server"></i>
        <span>Backend</span>
      </div>
    ),
  },
];

const SelectGroup = ({ onChange }) => {
  return (
    <label htmlFor="group">
      Wybierz grupę
      <Select
        className={selectGroupStyle.customSelect}
        placeholder=""
        options={options}
        onChange={onChange}
      />
    </label>
  );
};

export default SelectGroup;
