/* eslint-disable */
import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { captureData } from "../firebase/Firebase";
import "./ContainerNote.css"

const ContainerNote = () => {

  const [baseNotes, setBaseNotes] = useState([]);

  useEffect(() => {
    captureData(setBaseNotes);
  }, [])

  return (
    <>
      <div className="containerNote">
        <AddNotes />
        {baseNotes.map((note) => (
          <div key={note.id} className="">
            <Note
              key={note.id}
              nameNote={note.nameNote}
              contentNote={note.contentNote}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ContainerNote