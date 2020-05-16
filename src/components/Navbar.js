import React, {Component} from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    hSelect()
    {
        var h=document.querySelector('.home');
        var p=document.querySelector('.profile');
        var e=document.querySelector('.emergency');
        document.body.style.backgroundColor = "#484848";
        h.style.color='#484848';
        h.style.backgroundColor="#F9DC5C";
        p.style.color='#FFF';
        p.style.backgroundColor="#484848";
        e.style.color='#E54545';
        e.style.backgroundColor="#484848";
    }
    pSelect()
    {
        var h=document.querySelector('.home');
        var p=document.querySelector('.profile');
        var e=document.querySelector('.emergency');
        document.body.style.backgroundColor = "#484848";
        p.style.color='#484848';
        p.style.backgroundColor="#F9DC5C";
        h.style.color='#FFF';
        h.style.backgroundColor="#484848";
        e.style.color='#E54545';
        e.style.backgroundColor="#484848";
    }
    eSelect()
    {
        var h=document.querySelector('.home');
        var p=document.querySelector('.profile');
        var e=document.querySelector('.emergency');
        e.style.color='#484848';
        e.style.backgroundColor="#E54545";
        document.body.style.backgroundColor = "#E54545"; 
        p.style.color='#FFF';
        p.style.backgroundColor="#484848";
        h.style.color='#FFF';
        h.style.backgroundColor="#484848";
    }
    render()
    {
        return(
            <div className="container"> 
             <ul className={styles.list}>
                <div className={styles.navWrapper}>
                        <li className="home"><Link to="/" onClick={this.hSelect}>HOME</Link></li>
                        <li className="profile"><Link to="/profile" onClick={this.pSelect}>PROFILE</Link></li>
                        <li className="emergency"><Link to="/emergency" onClick={this.eSelect} style={{color: "#E54545"}}>EMERGENCY</Link></li>
                </div>
                </ul>
            </div>
        );
    }
}
export default Navbar;