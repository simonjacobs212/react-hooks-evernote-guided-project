import React, {useState} from "react";
const API = "http://localhost:3000/api/v1/notes"

function NoteEditor({ handleEditClick, displayNote, updateNote }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")


  function handleSubmit(event) {
    event.preventDefault()
    const noteObj = {
      title: title,
      body: body,
    }
    fetch(API + `/${displayNote.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
        .then(r => r.json())
        .then(data => updateNote(data))
  }


  return (
    <form className="note-editor" onSubmit={handleSubmit} >
      <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder={displayNote.title} />
      <textarea name="body" onChange={(e) => setBody(e.target.value)} placeholder={displayNote.body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleEditClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
