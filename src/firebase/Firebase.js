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

const RegisterGoogle = () => {
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
const LoginEmailPassword = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, "AQUI ESTOY");
      // ...
    });
};

const NoteCollection = async (titleNote, content, statusNotes) => {
  try {
    const docRef = await addDoc(collection(db, "note"), {
      nameNote: titleNote,
      contentNote: content,
      //uidUser: uid,
      statusNote: statusNotes
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const CaptureData = (setData) => {
  const q = query(collection(db, "note"));
  onSnapshot(q, (querySnapshot) => {
    const notes = [];
    querySnapshot.forEach((doc) => {
      notes.push({ ...doc.data(), id: doc.id });
    });
    return setData(notes);
  });
}

export {
  RegisterGoogle,
  userRegister,
  LoginEmailPassword,
  NoteCollection,
  CaptureData,
};
