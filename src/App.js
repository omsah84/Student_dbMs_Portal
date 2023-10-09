import './App.css';
import Home from './Components/Home/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Access/Login';
import StudentDataHome from './Components/StudentData/StudentDataHome';

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="loginS" element={<Login title='Student' />}/>
          <Route path="loginC" element={<Login title='Coordinator' />} />
        </Routes>
      </BrowserRouter> */}
    <StudentDataHome/>
    </div>
  );
}

export default App;
