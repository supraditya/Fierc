import React, {Component} from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {NavLink} from 'react-router-dom';
class Navbar extends Component{
    hSelect()
    {
        var h=document.querySelector('.home');
        var ha=document.querySelector('.homespan');
        var p=document.querySelector('.profile');
        var pa=document.querySelector('.profspan');
        var e=document.querySelector('.emergency');
        var ea=document.querySelector('.emerspan');
        document.body.style.backgroundColor = "#484848";
        h.style.borderRadius='50px 0 0 50px';
        p.style.borderRadius='0 0 0 0';
        e.style.borderRadius='0 50px 50px 0';
        ha.style.color='#484848';
        h.style.backgroundColor="#F9DC5C";
        pa.style.color='#FFF';
        p.style.backgroundColor="#484848";
        ea.style.color='#E54545';
        e.style.backgroundColor="#484848";
    }
    pSelect()
    {
        var h=document.querySelector('.home');
        var ha=document.querySelector('.homespan');
        var p=document.querySelector('.profile');
        var pa=document.querySelector('.profspan');
        var e=document.querySelector('.emergency');
        var ea=document.querySelector('.emerspan');
        document.body.style.backgroundColor = "#484848";
        h.style.borderRadius='50px 0 0 50px';
        p.style.borderRadius='0 0 0 0';
        e.style.borderRadius='0 50px 50px 0';
        ha.style.color='#FFF';
        h.style.backgroundColor="#484848";
        pa.style.color='#484848';
        p.style.backgroundColor="#F9DC5C";
        ea.style.color='#E54545';
        e.style.backgroundColor="#484848";
    }
    eSelect()
    {
        var h=document.querySelector('.home');
        var ha=document.querySelector('.homespan');
        var p=document.querySelector('.profile');
        var pa=document.querySelector('.profspan');
        var e=document.querySelector('.emergency');
        var ea=document.querySelector('.emerspan');
        document.body.style.backgroundColor = "#E54545";
        h.style.borderRadius='50px 0 0 50px';
        p.style.borderRadius='0 0 0 0';
        e.style.borderRadius='0 50px 50px 0';
        ha.style.color='#FFF';
        h.style.backgroundColor="#484848";
        pa.style.color='#FFF';
        p.style.backgroundColor="#484848";
        ea.style.color='#484848';
        e.style.backgroundColor="#E54545";   
    }
    render()
    {
        return(
            <div className="container"> 
             <ul className={styles.list}>
                <div className={styles.navWrapper}>
                        <li className="home"><NavLink to="/" onClick={this.hSelect}><span className="homespan">HOME</span></NavLink></li>
                        <li className="profile"><NavLink to="/profile" onClick={this.pSelect}><span className="profspan">PROFILE</span></NavLink></li>
                        <li className="emergency"><NavLink to="/emergency" onClick={this.eSelect} style={{color: "#E54545"}}><span className="emerspan">EMERGENCY</span></NavLink></li>
                </div>
                </ul>
            </div>
        );
    }
}
export default Navbar;