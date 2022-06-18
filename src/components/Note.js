import React, { useState } from "react";
import "./Note.css";
const Note = (props) => {
  // const [isMousedOver, setIsMousedOver] = useState(false);
  // const onMouseOverHandler = () => {
  //   setIsMousedOver(true);
  // };
  // const onMouseOutHandler = () => {
  //   setIsMousedOver(false);
  // };
  const handleClick = (event) => {
    props.onDelete(props.id);
  };
  return (
    <div
      className="note"
      // onMouseOver={onMouseOverHandler}
      // onMouseOut={onMouseOutHandler}
      // style={{ transform: isMousedOver ? "scale(1.1)" : "scale(1)" }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </button>
    </div>
  );
};
export default Note;
