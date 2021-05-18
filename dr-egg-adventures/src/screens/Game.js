import React from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import snake from '../images/Snake.png';
import blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";

export const Game = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    return (
        <div className = "Lab-Background-Container">
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>
            <div className = "snake-container">
                <img className = "chatbot" src = {snake} alt = "chatbot" /> 
            </div> 
            <a href = "https://apps.apple.com/au/app/dr-egg-adventures-laboratory/id1372550003"><img className = "Blackboard" src = {blackboard} alt = "blackboard" /></a>
        </div>
    )
}
export default Game
