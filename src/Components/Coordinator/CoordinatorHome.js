import React, { useState } from 'react'
import Style from './CoordinatorHome.module.scss'
import { Link } from 'react-router-dom';

export default function CoordinatorHome() {
  let [input,setInput] = useState();

  const clickHandler = () =>{
    // alert(input);
    setInput("");
  }


  return (
    <div className={Style.CoordinatorHome}>
      <div>
        <h2>COORDINATOR</h2>
        <h4>Welcome</h4>
      </div>

      <div className={Style.searchBar}>
        <input type='text' className={Style.inputStyle} placeholder='Enter Batch' onChange={(e)=>setInput(e.target.value)} value={input} />
        <br/>
        
        <Link to='coordinatorview'><button className={Style.btn} onClick={clickHandler}>SEARCH</button> </Link>
      </div>
      <outLet/>

    </div>
  )
}
