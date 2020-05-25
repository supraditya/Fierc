import React from 'react';
import styles from '../stylesheets/CameraTile.module.css';
import styled from 'styled-components';
const StyledDiv=styled.div`
    right: 10%;
`;
const CameraTile=(props)=>{
    return(
        <StyledDiv>
            <button className={styles.tileButton}>Camera {props.number}<p>{props.text}</p></button>
        </StyledDiv>
    )
}
export default CameraTile;
/* Change component to class based, save color values and
messages as states and use the if-else function to assign them
to the tiles accordingly */