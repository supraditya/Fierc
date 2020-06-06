import React, {Component} from 'react';
import styles from '../stylesheets/CameraTile.module.css';
import styled from 'styled-components';
const StyledDiv=styled.div`
    right: 10%;
`;
class CameraTile extends Component{
    state={
        tileColor:'#479B1F', //Green, grey, red, yellow
        textColor: '#fff', //White, yellow, red
        textContent:'Everything is fine!' //Everything's fine, You gotta see this..., Disconnected, DANGER!
    }
    // Update state of tile based on details passed from backend
   render()
   {
    //    if(this.props.status==='green')
    //    {
    //        this.setState({
    //         tileColor: '#479B1F',
    //         textColor:'#fff',
    //         textContent:'Everything is Fine!'
    //        });
    //    }
    //    else if(this.props.status==='orange')
    //    {
    //        this.setState({
    //         tileColor: '#CF881D',
    //         textColor:'#fff',
    //         textContent:'You might wanna see this...'
    //        });
    //    }
    //    else if(this.props.status==='red')
    //    {
    //        this.setState({
    //         tileColor: '#A32D2D',
    //         textColor:'#FAFF0E',
    //         textContent:'DANGER!'
    //        });
    //    }
    return(
        <StyledDiv>
            <button className={styles.tileButton}>Camera {this.props.number}<p>{this.state.textContent}</p></button>
        </StyledDiv>
    );
   }
}
export default CameraTile;
/* Change component to class based, save color values and
messages as states and use the if-else function to assign them
to the tiles accordingly */