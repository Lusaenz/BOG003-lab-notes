/* eslint-disable */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";

import { db } from "./confiFirebase";

const userRegister = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      console.log("then login");
      // Signed in
      const { user } = userCredential;
      console.log(user);
    }
  );
};

const registerGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const { user } = result;
    console.log(token, user);
  });
};

const loginEmailPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, "AQUI ESTOY");
      // ...
    });
    
};

const noteCollection = async (titleNote, content, statusNotes, uid) => {
  try {
    const docRef = await addDoc(collection(db, "note"), {
      nameNote: titleNote,
      contentNote: content,
      uidUser: uid,
      statusNote: statusNotes
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const captureData = (setData) => {
  const q = query(collection(db, "note"));
  onSnapshot(q, (querySnapshot) => {
    const notes = [];
    querySnapshot.forEach((doc) => {
      notes.push({ ...doc.data(), id: doc.id });
    });
    return setData(notes);
  });
}

const editContent = async (id, content) => {
  const edit = doc(db, "note", id);
  await updateDoc(edit, {
    contentNote: content,
  });
};
const deleteNote = async (id) => {
  await deleteDoc(doc(db, "note", id));
}


export {
  registerGoogle,
  userRegister,
  loginEmailPassword,
  noteCollection,
  captureData,
  editContent,
  deleteNote
};
