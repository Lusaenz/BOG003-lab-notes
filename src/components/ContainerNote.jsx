/* eslint-disable */
import React, { useState } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";

const ContainerNote = () => {
  const [lisTitle, setListeTitle] = useState([])
  const listNewTitle = (title) => {
      setListeTitle([title,...lisTitle])

  }
  const [listNote, setListNote] = useState([]);
  const listNewNote = (note) => {
    setListNote([note, ...listNote]);
  }
      console.log(listNote);

  return (
    <>
      <AddNotes 
      listNewNote={listNewNote} 
      />
      {/*
      showNotes.map(e => <Note note={e}/>)
      */}
    </>
  );
}

export default ContainerNote