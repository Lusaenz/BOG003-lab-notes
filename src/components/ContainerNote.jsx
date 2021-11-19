/* eslint-disable */
import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { CaptureData } from "../firebase/Firebase";

const ContainerNote = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CaptureData(setData);
  }, [])

  console.log("estamos en data", data);
  return (
    <>
      <AddNotes />
      { data.map((note) => (
          <div key={note.id}>
            <p>{note.nameNote}</p>
            {console.log("item en el map", note)}
            <p>{note.contentNote}</p>
          </div>
          /*<Note key={i} nameNote={e.nameNote} contentNote={e.nameNote} />*/
        ))
        }
    </>
  );
}

export default ContainerNote