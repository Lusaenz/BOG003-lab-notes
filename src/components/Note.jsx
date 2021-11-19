/* eslint-disable */
import react from "react";
import { NoteCollection } from "../firebase/Firebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
const Note = (props) => {
  return (
    <>
      <section>
        <div className="inputTitle">
          <input type="text" value="" /> {props.nameNote}
        </div>
        <div>
          <textarea name="note" color="40" rows="2" value="" disabled />{" "}
          {props.contentNote}
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </section>
    </>
  );
};
export default Note;
