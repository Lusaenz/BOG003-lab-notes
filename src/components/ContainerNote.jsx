/* eslint-disable */
import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { captureData } from "../firebase/Firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import "./ContainerNote.css"

const ContainerNote = () => {

  const [baseNotes, setBaseNotes] = useState([]);
   const [currentUser, setCurrentUser] = useState("");
   //const []
   const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
     if (user) {
       setCurrentUser(user.uid);
     } 
   });
   console.log(currentUser);
  useEffect(() => {
    captureData(setBaseNotes);
  }, [])

  return (
    <>
      <div className="containerNote">
        <AddNotes />
        {baseNotes.map((note) => {
          return (
          currentUser === note.uidUser ? 
          <div key={note.id} className="">
            <Note
              key={note.id}
              nameNote={note.nameNote}
              contentNote={note.contentNote}
              id={note.id}
              note={note}
            />
          </div>
          :""

          )})}
      </div>
    </>
  );
}

export default ContainerNote