import React from 'react'
import btnback from '../images/btn-Back.png';
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
                <img className = "Back-Button" 
                src = {btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            <img className = "Blackboard" src = {blackboard} alt = "blackboard" />
        </div>
    )
}
export default Trailer

