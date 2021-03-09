import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, handleClick, searchTerm, handleNew }) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} handleClick={handleClick} searchTerm={searchTerm} />
      <button onClick={handleNew}>New</button>
    </div>
  );
}

export default Sidebar;
