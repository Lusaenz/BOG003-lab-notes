/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/TempletSignUp";
import Login from "./views/TempletLogin";
import ContainerNote from "./components/ContainerNote";
// import { AddNotes} from './NewNote'
const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <>
              <ContainerNote />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
