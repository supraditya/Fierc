import React, {Component} from 'react';
import styles from '../stylesheets/Profile.module.css';
const imageDiv={
    display:'table',
    height: '270px',
    width: '270px',
    backgroundColor: '#9D9D9D',
    borderStyle: 'solid 1px white',
    color:'white',
    borderRadius:'25px',
    margin:'auto'
}
const imgStyle={
    display:'table-cell',
    verticalAlign:'middle'
}
const spanStyle={
    fontSize: '200px'
}

class Profile extends Component{
   render()
   {
    return(
        <div className={styles.container}>
            <div style={imageDiv}>
            <p style={imgStyle}><span style={spanStyle}><i class="fa fa-user" aria-hidden="true"></i></span></p>
            </div>
            <br></br>
            <div className={styles.tableStyle}>
            <div className={styles.tableRowStyle}>
                <div className={styles.tableCellStyleField}>NAME</div>
                <div className={styles.tableCellStyle}>Aditya Sunil Menon</div>
            </div>
            <div className={styles.tableRowStyle}>
                <div className={styles.tableCellStyleField}>CONTACT</div>
                <div className={styles.tableCellStyle}>7738014883</div>
            </div>
            <div className={styles.tableRowStyle}>
                <div className={styles.tableCellStyleField}>EMAIL</div>
                <div className={styles.tableCellStyle}>aditya300100@gmail.com</div>
            </div>
            </div>
        </div>
    );
   }
}
export default Profile;