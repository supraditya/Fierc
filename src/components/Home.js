import React from 'react';
import CameraTile from './CameraTile';
import styled from 'styled-components';
const StyledDiv=styled.div`
    width: 80%;
    height: 500px;
    margin: auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    overflow-y: scroll;
    @media only screen and (max-width: 640px)
    {
        height: 550px;
    }
    @media only screen and (max-width: 1170px)
    {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 770px)
    {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Home=()=>{
    return(
        <StyledDiv>
            {/* Fetch camera number, text and status from API  */}
            <CameraTile number='1' text='Everything is fine!' status='green'/>
            <CameraTile number='2' text='Everything is fine!' status='green'/>
            <CameraTile number='3' text='Everything is fine!' status='green'/>
            <CameraTile number='4' text='Everything is fine!' status='green'/>
            <CameraTile number='5' text='Everything is fine!' status='green'/>
            <CameraTile number='6' text='Everything is fine!' status='green'/>
            <CameraTile number='7' text='Everything is fine!' status='green'/>
            <CameraTile number='8' text='Everything is fine!' status='green'/>
        </StyledDiv>
    )
}
export default Home;