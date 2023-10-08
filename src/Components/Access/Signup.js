import React, { useState } from 'react'
import Styled from './Signup.module.scss'
import Login from './Login';


export default function Signup(props) {
  let [cnt, setCnt] = useState(false);
  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const onCLickLoginIn = () => {
    setCnt(!cnt);
  }

  const onClickSignup = () => {
    // setCnt(!cnt);

  }

  return (
    <div>
      {cnt ? <Login title=' Login' /> : <div className={Styled.home}>
        <div className={Styled.sub_home}>
          <div><h2 style={{
            textAlign: 'center'
          }}>{props.title}</h2></div>
          <div className={Styled.container}>
            <div className={Styled.label}>
              <label className={Styled.heading} >Roll No</label><br />
              <input className={Styled.input} type='text'  value={userName} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Email</label><br />
              <input className={Styled.input} type='email' value={email} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Password </label><br />
              <input className={Styled.input} type='password' value={password} />
            </div>
            <div >
              <button className={Styled.submit} onClick={onClickSignup} >Sign up</button>
              <button className={Styled.submit} onClick={onCLickLoginIn}>Go Back</button><br />
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}
