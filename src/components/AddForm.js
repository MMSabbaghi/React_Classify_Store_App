import { useState } from "react";
const AddForm = ({ placeholder, onSubmit }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <form className="add_form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"> + </button>
    </form>
  );
};

export default AddForm;
