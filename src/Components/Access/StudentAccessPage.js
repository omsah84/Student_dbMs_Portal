import React, { useState } from 'react'
import Styled from './CoordinatorAccessPage.module.scss'
import Signup from './StudentSignup';
import Login from './StudentLogin';

export default function CoordinatorAccessPage(props) {
  let [show,setShow] = useState(true);


  return (
    <div className={Styled.container}>
      <div className={Styled.heading1}>
        <h3 className={Styled.title}>STUDENT ACCESS</h3>
      </div>
      <div className={Styled.btnGroup}>
        <button className={Styled.btn} onClick={() => {setShow(false)}}>Sign up</button>
        <button className={Styled.btn} onClick={()=> { setShow(true)}} >Log in</button>
      </div>
      <div>
        { show ?<>
        <Login/>
        </> : <>
         <Signup/>
         </>}
      </div>


    </div>
  )
}
