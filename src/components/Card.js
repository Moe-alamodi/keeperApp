import React from "react";
import Note from "./Note";
import "./Note.css";

const Card = (props) => {
  console.log(props.noteArray);
  return (
    <div className="card">
      {props.noteData.map((note) => (
        <Note title={note.title} content={note.content} id={note.key} />
      ))}
    </div>
  );
};
export default Card;
