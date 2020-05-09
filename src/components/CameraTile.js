import React from 'react';
import styles from '../stylesheets/CameraTile.module.css';
const CameraTile=()=>{
    return(
        <div className="tile">
            <button className={styles.tileButton}>Camera 1<p>Placeholder text</p></button>
        </div>
    )
}
export default CameraTile;