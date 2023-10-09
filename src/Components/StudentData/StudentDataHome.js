import React, { useState } from 'react'
import StudentUpdata from './StudentUpdata'
import StudentView from './StudentView'
import Style from './StudentDataHome.module.scss'



export default function StudentDataHome() {
  let [isVisible,setVisible] = useState(true);
  let [id,setId] = useState("20781A05G6");

  return (
    <div className={Style.studentHome}>
      <div className={Style.heading}>
        <h2> Student Information</h2>
        <h4>{id}</h4>
      </div>
      <div className={Style.btnGroup}>
        <button className={Style.btn} onClick={()=>setVisible(true)}>View</button>
        <button className={Style.btn} onClick={()=>setVisible(false)} >Update</button>
        {isVisible ? <StudentView rollno={id}/>: <StudentUpdata rollno={id}/>}
      </div>
    </div>
  )
}
