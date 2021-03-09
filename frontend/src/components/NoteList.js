import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleClick, searchTerm }) {

  // notes.map((note) => {
  //   return (
  //     <NoteItem note={note}>
  //   )
  // })
  const filteredNotes = notes.filter((note) => {
    return note[searchTerm.attribute].toLowerCase().includes(searchTerm.string.toLowerCase())
  })
  const noteList = filteredNotes.map((note) => <NoteItem note={note} key={note.id} handleClick={handleClick}/>)
  
  return (
    <ul>
      {noteList}
    </ul>
  );
}

export default NoteList;
