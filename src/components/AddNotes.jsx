/* eslint-disable */
import React, { useState } from "react";
import { noteCollection } from "../firebase/Firebase";
const AddNotes = (props) => {
  const [nameNote, setNameNote] = useState("");
  const [newNote, setNewNote] = useState("");
  
  const titleNote = (event) => {
    console.log(event.target);
    setNameNote(event.target.value);
  };
  const addNoteNew = (event) => {
    setNewNote(event.target.value);
  };
  const [validation, setValidation] = useState(true);

  const submit = (event) => {
    event.preventDefault();
    if(newNote.trim() !== ""){
        setNameNote("");
        setNewNote("");
        setValidation(true);
        noteCollection(nameNote, newNote, "Creadas");
    }else{
      setValidation(false)
    }
  
  }
  return (
    <>
      <form className="form" onSubmit={submit}>
        <input
          type="text"
          value={nameNote}
          placeholder="Titulo"
          onChange={titleNote}
        />
        <textarea
          name="note"
          color="40"
          rows="2"
          value={newNote}
          placeholder="Añadir nota"
          onChange={addNoteNew}
        />
        <button type="submit">Añadir</button>
      </form>
      {!validation && (
        <div className="validation"> Añada una nota por favot</div>
      )}
      {/* {note === "" ? <p>Escribe algo</p> : <p>ya escribiste</p>} */}
      {
        
      }
    </>
  );
};
export default AddNotes;
