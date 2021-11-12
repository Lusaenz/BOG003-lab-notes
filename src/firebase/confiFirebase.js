/* eslint-disable */
import { initializeApp } from "firebase/app";

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseSetting = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAZftA0K5i32wqhaFaooWPhQQJlIEtwXpo",
    authDomain: "appunty-2aa16.firebaseapp.com",
    projectId: "appunty-2aa16",
    storageBucket: "appunty-2aa16.appspot.com",
    messagingSenderId: "559478850946",
    appId: "1:559478850946:web:370b157a25f24adc3afb9b",
    measurementId: "G-C73HZJFX3M",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};
export { firebaseSetting };
