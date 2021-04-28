import React from 'react'
import button from '../images/btn-Back.png';
import snake from '../images/Snake.png';
import blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";

export const Trailer = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    return (
        <div className = "world-image">
            <div className = "hb-container">
                <img className = "home-button" src = {button} alt = "home button" onClick = {homeNav}/> 
            </div> 
            <div className = "snake-container">
                <img className = "chatbot" src = {snake} alt = "chatbot" /> 
            </div> 
            <iframe width="854" height="480" src="https://www.youtube.com/embed/LfT3ow_3R5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </div>
    )
}
export default Trailer

