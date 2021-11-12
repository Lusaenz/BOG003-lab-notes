import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { firebaseSetting } from './firebase/confiFirebase';
import Register from './views/TempletSignUp';
import Login from './views/TempletLogin';
import AddNotes from './components/NewNote';

// import { AddNotes} from './NewNote'

firebaseSetting();

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Notes" element={<AddNotes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
