/* eslint-disable */
import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { CaptureData } from "../firebase/Firebase";

const ContainerNote = () => {

  const [data, setData] = useState([]);


  /* const [lisTitle, setListeTitle] = useState([])
  const listNewTitle = (title) => {
      setListeTitle([title,...lisTitle])

  }
  const [listNote, setListNote] = useState([]);
  const listNewNote = (note) => {
    setListNote([note, ...listNote]);
  }
      console.log("estamos en la lista de notas", listNote);
      console.log("estamos en la lista de titulos", lisTitle); 
   */
    useEffect(() => {
        CaptureData(setData);
}, []
    
    );
 console.log("estamos en data", data);
  return (
    <>
      <AddNotes />
      { data.length === 0 ? "no notas": 
      data.map((e, i) => (
        <div key={i}>
          <p>{e.nameNote}</p>
          {console.log("item", e)}
          <p>{e.contentNote}</p>
        </div>
        /*<Note key={i} nameNote={e.nameNote} contentNote={e.nameNote} />*/
      ))}
    </>
  );
}

export default ContainerNote