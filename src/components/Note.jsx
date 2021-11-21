/* eslint-disable */
import react from "react";
import { NoteCollection } from "../firebase/Firebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import "./Note.css"
const Note = (props) => {
  return (
    <>
      <section className="note">
        <div >
          <p className="title">{props.nameNote}</p>
        </div>
        <div>
          <textarea className="content" value={props.contentNote} disabled />
        </div>
        <div>
          <FontAwesomeIcon className="icono" 
          icon={faEllipsisV} />
        </div>
      </section>
    </>
  );
};
export default Note;
