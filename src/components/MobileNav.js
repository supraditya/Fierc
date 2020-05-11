import React from 'react';
import styles from '../stylesheets/MobileNav.module.css';
import {Link} from 'react-router-dom';
const MobileNav=()=>{
    return(
        <div className="container"> 
         <ul className={styles.list}>
            <div className={styles.nav}>
                    <li><Link to="/"><span><i class="fa fa-home icon-large"></i></span></Link></li>
                    <li><Link to="/profile"><span><i class="fa fa-user icon-large" ></i></span></Link></li>
                    <li><Link to="/emergency"><span><i class="fa fa-exclamation-triangle icon-large" aria-hidden="true"></i></span></Link></li>
            </div>
            </ul>
        </div>
    )
}
export default MobileNav;