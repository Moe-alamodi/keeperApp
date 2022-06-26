import React from "react";
import Delete from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import "./Note.css";
const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={handleClick} aria-label="delete" size="small">
        <Delete fontSize="small" />
      </IconButton>
    </div>
  );
};
export default Note;
