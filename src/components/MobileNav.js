import React, {Component} from 'react';
import styles from '../stylesheets/MobileNav.module.css';
import {Link} from 'react-router-dom';
class MobileNav extends Component{
    render()
    {
        const spanstyle={
            fontSize: '45px'
        };
        return(
            <div className="MobileNav">
                <div className="container"> 
                <ul className={styles.list}>
                    <div className={styles.nav}>
                            <li><Link to="/"><span style={spanstyle}><i class="fa fa-home icon-large"></i></span></Link></li>
                            <li><Link to="/profile"><span style={spanstyle}><i class="fa fa-user icon-large" ></i></span></Link></li>
                            <li><Link to="/emergency"><span style={spanstyle}><i class="fa fa-exclamation-triangle icon-large" aria-hidden="true"></i></span></Link></li>
                    </div>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MobileNav;