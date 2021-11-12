/* eslint-disable */

import React, { useState } from "react";

const AddNotes = (props) => {
  const [nameNote, setNameNote] = useState("");
  const [newNote, setNewNote] = useState("");
  const titleNote = (event) => {
    setNameNote(event.target.value);
  };
  const addNoteNew = (event) => {
    setNewNote(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={nameNote}
        placeholder="Nombre de la nota"
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

      <button
        type="button"
        onClick={() => {
          setNameNote("");
          setNewNote("");
        }}
      >
        Agregar
      </button>
      {/* {note === "" ? <p>Escribe algo</p> : <p>ya escribiste</p>} */}
    </>
  );
};
export default AddNotes;
