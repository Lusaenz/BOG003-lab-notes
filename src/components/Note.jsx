/* eslint-disable */
import react, {useState} from "react";
import { NoteCollection, editContent, deleteNote } from "../firebase/Firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./Note.css"
const Note = (props) => {
  const [disabled, setDisabled] = useState (true);
  const [confirmChanges, setConfirmChenges] = useState (false);
  const [newContent, setNewComtent] = useState(props.contentNote);
  const [opcion, setOpcion] = useState(false);
  const [btnDelete, setBtnDelete] = useState(true);
  const [btnEdit, setBntEdit] = useState(true);
  const [btnSaveChanges, setBtnSaveChanges]= useState(true);
  const [btnCancelChanges, setBtnCancelChanges] = useState(true);
  const editTearea = (e) => {
    setDisabled(!disabled);
  };
 
  return (
    <>
      <section className="note">
        <div>
          <p className="title">{props.note.nameNote}</p>
        </div>
        <div>
          <textarea
            className="content"
            value={newContent}
            name="editTearea "
            disabled={disabled}
            onChange={(event) => {
              setNewComtent(event.target.value);
            }}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className="icono"
            onClick={() => {
              setOpcion(true);
            }}
            icon={faEllipsisV}
          />
        </div>
        {opcion && (
          <div>
            {btnEdit && (
              <button
                onClick={() => {
                  editTearea(props.id);
                  setConfirmChenges(true);
                  setBtnDelete(false);
                  setBntEdit(false);
                }}
              >
                Editar
              </button>
            )}

            {btnDelete && (
              <button
                onClick={() => {
                  alert("Estas segurox de eliminar esta nota?");
                  deleteNote(props.id);
                }}
              >
                Eliminar
              </button>
            )}
          </div>
        )}

        {confirmChanges && (
          <div>
            {btnSaveChanges && (
              <button
                onClick={() => {
                  editContent(props.id, newContent);
                  setDisabled(true);
                  setBtnCancelChanges(false);
                  setBtnSaveChanges(false);
                }}
              >
                Guardar Cambios
              </button>
            )}

            {btnCancelChanges && (
              <button
                onClick={() => {
                  setDisabled(true);
                  setBtnSaveChanges(false);
                  setBtnCancelChanges(false);
                }}
              >
                Cancelar cambios
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
};
export default Note;
