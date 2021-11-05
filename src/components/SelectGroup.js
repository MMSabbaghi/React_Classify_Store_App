import { useState } from "react";
import { BiListPlus, BiListCheck } from "react-icons/bi";
import AddForm from "./AddForm";

const SelectGroup = ({ options, onChange, selectedGroupId, onAddGroup }) => {
  const [showForm, setShowForm] = useState(false);

  const renderOptions = () => {
    if (!options.length)
      return (
        <option value="" disabled>
          Add a group !
        </option>
      );

    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <>
      <div className="select_group">
        <select
          value={selectedGroupId || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          {renderOptions()}
        </select>
        <button onClick={() => setShowForm(!showForm)}>
          {!showForm ? <BiListPlus /> : <BiListCheck />}
        </button>
      </div>
      {showForm && <AddForm placeholder="group name" onSubmit={onAddGroup} />}
    </>
  );
};

export default SelectGroup;
