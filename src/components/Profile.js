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
const tableStyle={
    display:'table',
    width: '81%',
    border:'solid 2px #F9DC5C',
    margin: 'auto',
    color:'white',
    borderRadius:'50px',
    padding:'2%'
}
const tableRowStyle={
    display:'table-row'
}
const tableCellStyleField={
    display:'table-cell',
    width:'50%',
    fontSize:'32px',
    textDecoration:'underline'
}
const tableCellStyle={
    display:'table-cell',
    width:'50%',
    fontSize:'32px',
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
            <div style={tableStyle}>
            <div style={tableRowStyle}>
                <div style={tableCellStyleField}>NAME</div>
                <div style={tableCellStyle}>Aditya Sunil Menon</div>
            </div>
            <div style={tableRowStyle}>
                <div style={tableCellStyleField}>CONTACT</div>
                <div style={tableCellStyle}>7738014883</div>
            </div>
            <div style={tableRowStyle}>
                <div style={tableCellStyleField}>EMAIL</div>
                <div style={tableCellStyle}>aditya300100@gmail.com</div>
            </div>
            </div>
        </div>
    );
   }
}
export default Profile;