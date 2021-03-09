import React from "react";

function NoteItem({ note, handleClick }) {
  return (
    <li data-id={note.id} onClick={() => handleClick(note)}>
      <h2>{note.title}</h2>
      <p>{note.body.substring(0,15) + "..."}</p>
    </li>
  );
}

export default NoteItem;
