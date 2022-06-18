import React, { useState } from "react";
import Note from "./Note";
import "./Note.css";
import NewNote from "./NewNote";

const Card = (props) => {
  const [updatedNoteData, setUpdatedNoteData] = useState([...props.noteData]);

  const onAddHandler = (newData) => {
    newData.key = updatedNoteData.length + 1;
    setUpdatedNoteData((prevData) => {
      return [...prevData, newData];
    });
  };
  const deleteHandler = (id) => {
    setUpdatedNoteData((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <NewNote onAdd={onAddHandler} />
      <div className="card">
        {updatedNoteData.map((note, index) => (
          <Note
            onDelete={deleteHandler}
            title={note.title}
            content={note.content}
            id={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Card;
