import React, { useState } from 'react'
import Styled from './CoordinatorAccessPage.module.scss'
import Signup from './CoordinatorSignup';
import Login from './CoordinatorLogin';


export default function CoordinatorAccessPage(props) {
  let [show,setShow] = useState(true);


  return (
    <div className={Styled.container}>
      <div className={Styled.heading1}>
        <h3 className={Styled.title}>COORDINATOR ACCESS</h3>
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

{/* 
      {cnt ? <Signup title='Sign up' /> : <div className={Styled.home}>
        <div className={Styled.sub_home}>
          <div><h2 style={{
            textAlign: 'center'
          }}>{props.title}</h2></div>
          <div className={Styled.container}>
            <div className={Styled.label}>
              <label className={Styled.heading}>Email</label><br />
              <input className={Styled.input} type='email' />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Password </label><br />
              <input className={Styled.input} type='password' />
            </div>
            <div >
              <button className={Styled.submit} onClick={onCLickLoginIn} >Login</button><br />
              <button className={Styled.submit} onClick={onClickSignup} >Sign up</button>
            </div>
          </div>
        </div>
      </div>} */}

    </div>
  )
}
