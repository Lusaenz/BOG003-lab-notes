/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyAZftA0K5i32wqhaFaooWPhQQJlIEtwXpo",
  authDomain: "appunty-2aa16.firebaseapp.com",
  projectId: "appunty-2aa16",
  storageBucket: "appunty-2aa16.appspot.com",
  messagingSenderId: "559478850946",
  appId: "1:559478850946:web:370b157a25f24adc3afb9b",
  measurementId: "G-C73HZJFX3M"
});

export const db = getFirestore();
// const auth = getAuth();

