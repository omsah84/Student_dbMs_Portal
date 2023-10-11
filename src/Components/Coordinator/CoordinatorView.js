import React, { useState } from 'react'
import Style from './CoordinatorView.module.scss'
import ViewPage from './ViewPage';
import FilterPage from './FilterPage';




export default function CoordinatorView() {
    let [mode, setMode] = useState(true);

    const clickView = () => {
        setMode(true);
    }

    return (
        <div className={Style.CoordinatorView}>
            <div className={Style.heading}>
                <h3>STUDENT INFORMATION BATCH 2020</h3>
            </div>
            <div className={Style.btnGroup}>
                <button className={Style.btnStyle} onClick={clickView}>View</button>
                <button className={Style.btnStyle} onClick={() => setMode(false)}> Filter</button>
            </div>
            <div className={Style.view}>
                {mode ? <>  </> : <FilterPage/>}
            </div>
            <div className={Style.filter}>
                <ViewPage/>
            </div>

            <div>
                <button className={Style.btnStyle}> Get Excel File</button>
            </div>


        </div>
    )
}
