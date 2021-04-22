import React from 'react'
import bench from '../images/labbench.png';
import button from '../images/btn-Back.png';
import snake from '../images/Snake.png';
import DrEgg from '../images/DrEgg-cut.png';
import DrMoon from '../images/DrMoon-cut.png';
import { useHistory } from "react-router-dom";

//Buttons
import weird from '../images/wc-button.png';
import facts from '../images/facts-button.png';
import fanfic from '../images/fanfic-button.png';
import inv from '../images/inv-button.png';
import biogoo from '../images/bio-button.png';
import benchbutton from '../images/bench-button.png';

//Tools
import goggles from '../images/Goggle.png';
import hoverboard from '../images/HoverBoard.png';
import teletube from '../images/Teletube.png';

export const Lab = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    return (
        <div className = "Lab-Background-Container">
            <div className = "bb-container">
                <img className="bench-button" src={benchbutton} alt = "bench button"/>
            </div>
            <img className="drmoon" src={DrMoon} alt = "dr moon"/>
            <img className="dregg" src={DrEgg} alt = "dr egg"/>
            <div className = "button-container">
                <img className="lab-buttons" src={weird} alt = "weird creations button"/>
                <img className="lab-buttons" src={facts} alt = "crazy facts button"/>
                <img className="lab-buttons" src={fanfic} alt = "fanfiction button"/>
                <img className="lab-buttons" src={inv} alt = "inventory button"/>
                <img className="lab-buttons" src={biogoo} alt = "biogoo button"/>
                
            </div>
            <img className = "bench" src = {bench} alt = "lab bench"/> 


            <div className = "tool-container">
                <img className="tools" src={goggles} alt = "goggles"/>
                <img className="tools" src={hoverboard} alt = "hoverboard"/>
                <img className="tools" src={teletube} alt = "teletube"/>
            </div>  

            <div className = "snake-container">
                <img className = "chatbot" src = {snake} alt = "chatbot" /> 
            </div>
            <div className = "back-container"> 
                <img className = "Back-Button" src = {button} alt = "home button" onClick = {homeNav}/>  
            </div>
        </div>
    )
}
export default Lab

