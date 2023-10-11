import Style from './Home.module.scss';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div className={Style.main_home}>
            <h2 className={Style.heading}> SRI VENKATESWARA COLLEGE OF ENGINEERING AND TECHNOLOGY CHITTOOR</h2>
            <div className={Style.Home}>
                <div className={Style.container}>
                    <Link to='StudentLogin'> <button type='button' className={Style.btn} >Student</button> </Link>
                    <Link to='CoordinatorLogin' > <button type='button' className={Style.btn}>Coordinator</button></Link>
                </div>
            </div>
            <Outlet />
        </div>

    )
}
