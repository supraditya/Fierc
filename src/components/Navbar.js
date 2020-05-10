import React from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className="container"> 
         <ul className={styles.list}>
            <div className={styles.navWrapper}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/profile">PROFILE</Link></li>
                    <li><Link to="/emergency" style={{color: "#E54545"}}>EMERGENCY</Link></li>
            </div>
            </ul>
        </div>
    )
}
export default Navbar;