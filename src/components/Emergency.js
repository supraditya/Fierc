import React, {Component} from 'react';
import styles from '../stylesheets/Emergency.module.css';
const pStyle={
    display:'table-cell',
    verticalAlign: 'middle',
    color: '#FFF',
    fontSize: '36px',
    padding: '5%'
}
const circleButton={
    display:'table',
    width:'340px',
    height:'340px',
    border:'solid 4px white',
    borderRadius:'50%',
    margin: 'auto',
    backgroundColor: 'transparent'
}
class Emergency extends Component{
    render()
    {
        return(
            <div className={styles.container}>
                <button style={circleButton}>
                    <p style={pStyle}>CLICK TO CONFIRM EMERGENCY</p>
                </button>
                <ul>
                    <li><p className={styles.messageStyle}>Once you click the button, there is no going back</p></li>
                    <li><p className={styles.messageStyle}>The authorities will be notified of your status and address and will treat this as a REGULAR EMERGENCY RESPONSE</p></li>
                    <li><p className={styles.messageStyle}>Immediately after Signing up, update the emergency information fields with your contact and address. </p></li>
                    <li><p className={styles.messageStyle}>This feature cannot be accessed till all information has been updated beforehand </p></li>
                </ul>
            </div>
        )
    }
    
}
export default Emergency;