import React, { useState } from "react";
import "./NewNote.css";

const NewNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };
  const submitHandler = (event) => {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          name="title"
          onChange={onChangeHandler}
          placeholder="Title"
          value={note.title}
        ></input>
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={onChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default NewNote;
