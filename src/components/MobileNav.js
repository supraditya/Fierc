import React from 'react';
import styles from '../stylesheets/MobileNav.module.css';
import {Link} from 'react-router-dom';
const MobileNav=()=>{
    return(
        <div className="container"> 
         <ul className={styles.list}>
            <div className={styles.nav}>
                    <li><Link to="/"><i class="fa fa-home icon-large"></i></Link></li>
                    <li><Link to="/profile"><i class="fa fa-user icon-large" ></i></Link></li>
                    <li><Link to="/emergency"><i class="fa fa-exclamation-triangle icon-large" aria-hidden="true"></i></Link></li>
            </div>
            </ul>
        </div>
    )
}
export default MobileNav;