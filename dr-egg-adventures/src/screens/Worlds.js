import React from 'react'
import techno from '../images/technoworld.png';
import farm from '../images/farmworld.png';
import slum from '../images/slumworld.png';
import button from '../images/btn-Back.png';
import snake from '../images/Snake.png';
import { useHistory } from "react-router-dom";

export const Worlds = () => {

const history = useHistory();

const homeNav = () => {
    history.push('/map');
}

const technoNav = () => {
    history.push('/TechnoWorld');
}

const farmNav = () => {
    history.push('/FarmWorld');
}

const slumNav = () => {
    history.push('/SlumWorld');
}

    return (
        <div>
            <div className = "world-image">
                <img className = "technoworld" src = {techno} alt = "techno world" onClick = {technoNav}/>
                <img className = "farmworld" src = {farm} alt = "farm world" onClick = {farmNav}/>
                <img className = "slumworld" src = {slum} alt = "slum world" onClick = {slumNav}/>  
                    <div className = "hb-container">
                        <img className = "home-button" src = {button} alt = "home button" onClick = {homeNav}/> 
                    </div> 
                    <div className = "snake-container">
                        <img className = "chatbot" src = {snake} alt = "chatbot" /> 
                    </div>    
            </div>
        </div>
    )
}
export default Worlds
