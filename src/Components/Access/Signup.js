import React, { useState } from 'react'
import Styled from './Signup.module.scss'
import Login from './Login';


export default function Signup(props) {
  const [cnt, setCnt] = useState(false);
  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const onCLickLoginIn = () => {
    setCnt(true);
  }

  const onClickSignup = () => {
    setCnt(false);

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
              <input className={Styled.input} type='text' onChange={setUserName((e) => e.target.value)} value={userName} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Email</label><br />
              <input className={Styled.input} type='email' onChange={setEmail((e) => e.target.value)} value={email} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Password </label><br />
              <input className={Styled.input} type='password' onChange={setPassword((e) => e.target.value)} value={password} />
            </div>
            <div >
              <button className={Styled.submit} onClick={onCLickLoginIn}>Go Back</button><br />
              <button className={Styled.submit} onClick={onClickSignup} >Sign up</button>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}
