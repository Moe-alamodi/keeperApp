import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

import "./NewNote.css";

const NewNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setIsValid(true);

    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (note.title.trim().length === 0 || note.content.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setNote({ title: "", content: "" });
    setIsValid(true);
    props.onAdd(note);
    isNotExpandedHandler();
  };
  const isExpandedHandler = () => {
    setIsExpanded(true);
  };
  const isNotExpandedHandler = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        {isExpanded && (
          <input
            name="title"
            onChange={onChangeHandler}
            placeholder="Title"
            value={note.title}
            style={{ borderColor: !isValid ? "red" : "#fff" }}
          ></input>
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={onChangeHandler}
          onClick={isExpandedHandler}
          rows={isExpanded ? "3" : "1"}
        />
        {!isValid && (
          <span className="error" style={{ color: "red" }}>
            Area can't be empty
          </span>
        )}

        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};
export default NewNote;
