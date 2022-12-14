import React from 'react'
import techno from '../images/technoworld.png';
import farm from '../images/farmworld-dark.png';
import slum from '../images/slumworld-dark.png';
import button from '../images/btn-Back.png';
import worldText from '../images/world-text-flip.png';
import exit from '../images/back-icon.png';
import lab from '../images/lab-button.png';
import snake from '../images/characters/Snake.png';
import { useHistory } from "react-router-dom";

export const TechnoWorld = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    const handleLeave = () => {
        history.push('/worlds');
    }

    const handleLabs = () => {
        history.push('/lab');
    }

    return (
        <div>
            <div className = "world-image">
                <img className = "technoworld" src = {techno} alt = "techno world" />
                <img className = "farmworld" src = {farm} alt = "farm world" />
                <img className = "slumworld" src = {slum} alt = "slum world" />  
                    <div className = "hb-container">
                         <img className = "home-button" src = {button} alt = "home button" onClick = {homeNav}/> 
                     </div> 
                     <div className = "snake-container">
                        <img className = "chatbot" src = {snake} alt = "chatbot" /> 
                    </div> 
                     <div className = "techno-text-container">
                        <img className = "world-text" src = {worldText} alt = "text box"/>
                        <div className = "techno-text">
                            <h2 className = "world-title">TECHNOWORLD</h2>
                            <p className = "info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <br></br>
                            <p className = "info-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <br></br>
                            <p className = "info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className = "techno-exit" onClick = {handleLeave}>
                            <img className = "back-icon" src = {exit} alt = "back icon"/>
                        </div>
                    </div>
                    <div className = "lab-button">
                        <img className = "lab-button" src = {lab} alt = "lab button" onClick = {handleLabs}/>
                    </div>
            </div>
        </div>
    )
}
export default TechnoWorld

