import React, { useState } from 'react'
import Styled from './CoordinatorLogin.module.scss'
import { Link, Outlet } from 'react-router-dom';


export default function CoordinatorLogin(props) {
  let [userId, setUserId] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  

  const onClickLogin =() =>{
    // alert(userId + email + password);
    setUserId('');
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
              <label className={Styled.heading} >UserId</label><br />
              <input className={Styled.input} type='text' value={userId}  required onChange={(e)=> setUserId( e.target.value) }/>
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Email</label><br />
              <input className={Styled.input} type='email' value={email} required onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className={Styled.label}>
              <label className={Styled.heading} >Password </label><br />
              <input className={Styled.input} type='password' value={password}  required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div >
              <Link to='coordinatorhome'> <button className={Styled.submit} onClick={onClickLogin} >Log in</button></Link>
            </div>
            <div>
              <p>Forgot password?</p>
            </div>
          </div>
        </div>
      </div>
          <Outlet/>
    </div>
  )
}
