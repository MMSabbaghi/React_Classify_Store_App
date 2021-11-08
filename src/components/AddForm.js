import { useEffect, useRef, useState } from "react";
const AddForm = ({ placeholder, onSubmit, focusOnInput }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (focusOnInput) inputRef.current.focus();
  }, [focusOnInput]);

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
        ref={inputRef}
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
