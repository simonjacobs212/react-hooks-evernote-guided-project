import React from "react";

function NoteViewer({ displayNote, handleEditClick }) {

  return (
    <>
      <h2>{displayNote.title}</h2>
      <p>{displayNote.body}</p>
      <button onClick={handleEditClick} note={displayNote}>Edit</button>
      <button>Delete</button>
    </>
  );
}

export default NoteViewer;
