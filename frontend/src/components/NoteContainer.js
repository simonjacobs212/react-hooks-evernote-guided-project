import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const API = "http://localhost:3000/api/v1/notes"


function NoteContainer({ user }) {
  const [notes, setNotes] = useState([])
  const [displayNote, setDisplayNote] = useState(false)
  const [displayForm, showForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState({
    string:"", attribute: "title"
  })

  const handleChange = event => {
    const key = event.target.name
    const value = event.target.value 

    setSearchTerm({
      ...searchTerm, [key]: value
    })
  }

  function handleClick(note) {
    setDisplayNote(note)
  }

  function addNote(newNote) {
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes);
  }

  function handleNew(event) {
    const noteObj = {
      title: "New Note",
      body: "Edit note to add body content.",
      user_id: user.id
    }

    fetch(API, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(noteObj)
  })
      .then(r => r.json())
      .then(data => addNote(data))
    
  }
  
  function handleEditClick(note){
    showForm(!displayForm)
  } 


  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(notes => setNotes(notes))
  }, [])

  function updateNote(updatedNote) {
    console.log(updatedNote)
    const updatedNotes = notes.map(note => {
        if (note.id === updatedNote.id) {
            return {...note, updatedNote}
        } else {
           return note 
        }
    })
    setNotes(updatedNotes)
  }

  return (
    <>
      <Search handleChange={handleChange} searchTerm={searchTerm}/>
      <div className="container">
        <Sidebar notes={notes} handleClick={handleClick} searchTerm={searchTerm} handleNew={handleNew}/>
        <Content displayNote={displayNote} handleEditClick={handleEditClick} displayForm={displayForm} updateNote={updateNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
