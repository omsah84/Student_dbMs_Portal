import React from 'react'
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentAccessPage from './Components/Access/StudentAccessPage'
import CoordinatorAccessPage from './Components/Access/CoordinatorAccessPage'
import CoorinatorHome from './Components/Coordinator/CoordinatorHome'
import StudentDataHome from './Components/StudentData/StudentDataHome'
import CoordinatorView from './Components/Coordinator/CoordinatorView'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='StudentLogin' element={<StudentAccessPage />}/>
            <Route path='CoordinatorLogin' element={<CoordinatorAccessPage />} />
          </Route>
          <Route>
            <Route path='CoordinatorLogin/coordinatorhome' element={<CoorinatorHome/>}/>
            <Route path='CoordinatorLogin/coordinatorhome/coordinatorview' element={<CoordinatorView/>}/>
            <Route path='StudentLogin/studenthome' element={<StudentDataHome/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
