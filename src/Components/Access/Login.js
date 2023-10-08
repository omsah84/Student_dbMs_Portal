import React, { useState } from 'react'
import Styled from './Login.module.scss'
import Signup from './Signup';

export default function Login(props) {
  const [cnt, setCnt] = useState(false);

  const onCLickLoginIn = () => {
    setCnt(false);
  }

  const onClickSignup = () => {
    setCnt(true);
  }

  return (
    <div>
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
      </div>}

    </div>
  )
}
