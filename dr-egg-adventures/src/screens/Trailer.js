import React from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import snake from '../images/characters/Snake.png';
import blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";

export const Trailer = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    return (
        <div className = "Lab-Background-Container">
            <iframe className = "yt-trailer" width="1095" height="572" src="https://www.youtube.com/embed/LfT3ow_3R5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>
 
            
            <img className = "Blackboard" src = {blackboard} alt = "blackboard" />
        </div>
    )
}
export default Trailer

