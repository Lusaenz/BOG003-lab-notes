/* eslint-disable */
import React, { useState, useEffect } from "react";
import { noteCollection } from "../firebase/Firebase";
import { getAuth,onAuthStateChanged } from "@firebase/auth";
import "./AddNotes.css";
const AddNotes = (props) => {
  const [nameNote, setNameNote] = useState("");
  const [newNote, setNewNote] = useState("");
  const [validation, setValidation] = useState(true);
  const [showAllInput, setShowAllInput] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
   const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
     if (user) {
       setCurrentUser(user.uid);
     } 
   });
   console.log(currentUser);
  
  const titleNote = (event) => {
    console.log(event.target);
    setNameNote(event.target.value);
  };
  const addNoteNew = (event) => {
    setNewNote(event.target.value);
  };
  

  const submit = (event) => {
    event.preventDefault();
    if(newNote.trim() !== ""){
        setNameNote("");
        setNewNote("");
        setValidation(true);
        noteCollection(nameNote, newNote, "Creadas", currentUser);
        setShowAllInput(false)
        setShowButton(false)
    }else{
      setValidation(false)
    }
  }
  useEffect(() => {console.log("cambio nameNote")}, []);

  return (
    <>
      <form className="form" onSubmit={submit}>
        {showAllInput && (
          <input
            className="input-title"
            type="text"
            value={nameNote}
            placeholder="Titulo"
            onChange={titleNote}
          />
        )}
        <textarea
          className="notes"
          name="note"
          color="40"
          rows="2"
          value={newNote}
          placeholder="Añadir nota"
          onChange={addNoteNew}
          onClick={() => { 
            setShowAllInput(true) 
            setShowButton(true);
          } }
         
        />
        {showButton && (
          <button className="btn-note" type="submit">
            Añadir
          </button>
        )}
      </form>
      {!validation && (
        <div className="validation"> Añada una nota por favot</div>
      )}
      {/* {note === "" ? <p>Escribe algo</p> : <p>ya escribiste</p>} */}
      {}
    </>
  );
};
export default AddNotes;
