import React, {useState, useEffect} from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
  const userAPI = "http://localhost:3000/api/v1/users/1"
  const [userObj, setUser] = useState("")

  useEffect(() => {
    fetch(userAPI)
      .then(r => r.json())
      .then(user => setUser(user))
  }, [])

  return (
    <div className="app">
      <Header user={userObj}/>
      <NoteContainer user={userObj}/>
    </div>
  );
}

export default App;
