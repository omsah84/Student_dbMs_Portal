import './App.css';
import Home from './Components/Home/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Access/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="loginS" element={<Login title='Student' />}/>
          <Route path="loginC" element={<Login title='Coordinator' />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
