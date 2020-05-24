import React from 'react';
import CameraTile from './CameraTile';
import styled from 'styled-components';
const StyledDiv=styled.div`
    width: 83%;
    height: 500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    overflow-y: scroll;
`;
const Home=()=>{
    return(
        <StyledDiv>
            {/* Fetch camera number, text and status form API  */}
            <CameraTile number='1' text='Everything is fine!' status=''/>
            <CameraTile number='2' text='Everything is fine!' status=''/>
            <CameraTile number='3' text='Everything is fine!' status=''/>
            <CameraTile number='4' text='Everything is fine!' status=''/>
        </StyledDiv>
    )
}
export default Home;