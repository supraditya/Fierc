import React from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className="container">
            <nav className="{styles.main}">
                <div className="nav-wrapper">
                    <ul className={styles.list}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/profile">PROFILE</Link></li>
                        <li><Link to="/emergency">EMERGENCY</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;