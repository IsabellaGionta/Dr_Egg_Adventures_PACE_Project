import React from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";
import icon from '../images/add-icon.png';
import fish from '../images/fish.png';

export const WeirdCreations = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
    }

    const submitNav = () => {
        history.push('/contact-form');
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
            <div className = "wc-blackboard-container">
                <h1 className = "wc-heading"> Weird Creations</h1>
                <img className = "submit-icon" src = {icon} onClick = {submitNav}/>
                <hr className = "hr-line"></hr>
                <div className = "chat-container">
                    <div className = "chat-view">
                        <img className = "fish-icon" src = {fish} />
                        <p className = "wc-text"><b>@dregguser1</b>hahaha this is a cool glowship. #rebel</p>
                    </div>
                    <hr className = "hr-line2"></hr>
                    <div className = "chat-view">
                        <img className = "fish-icon" src = {fish} />
                        <p className = "wc-text"><b>@dregguser2</b>hehehe glow fish and chips for dinner! #dinner #awesome</p>
                    </div>
                    <hr className = "hr-line2"></hr>
                </div>
            </div>
            <img className = "Blackboard" src = {blackboard} alt = "blackboard" />
        </div>
    )
}
export default WeirdCreations