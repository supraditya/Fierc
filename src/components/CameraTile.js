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
/* Change component to class based, save color values and
messages as states and use the if-else function to assign them
to the tiles accordingly */