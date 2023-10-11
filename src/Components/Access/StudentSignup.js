import React, { useState } from 'react'
import Styled from './StudentSignup.module.scss'


export default function CoordinatorLogin(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const onClickSign =() =>{
    // alert(email + password);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <div className={Styled.home}>
        <div className={Styled.sub_home}>
          <div><h2 style={{
            textAlign: 'center'
          }}>{props.title}</h2></div>
          <div className={Styled.container}>
            <div className={Styled.label}>
              <label className={Styled.heading} >*Email</label><br />
              <input className={Styled.input} type='email' value={email} required onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >*Password </label><br />
              <input className={Styled.input} type='password' value={password}  required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div  style={{textAlign:'center'}}>
              <button className={Styled.submit} onClick={onClickSign} > Join</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
