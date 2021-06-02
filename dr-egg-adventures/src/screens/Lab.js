import React from 'react'
import Popup from '../components/Popup';
import { useState } from 'react';

import bench from '../images/labbench.png';
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import snake from '../images/characters/Snake.png';
import DrEgg from '../images/DrEgg-cut.png';
import flag from '../images/aboriginal-flag.png';
import flaghover from '../images/flag-glow.png';
import plank from '../images/plank.png';
import book from '../images/Book.png';
import popupBackground from '../images/popup-bg.png';

import { useHistory } from "react-router-dom";

//Buttons
import weird from '../images/btn-weirdcreations.png';
import facts from '../images/btn-crazysciencefacts.png';
import fanfic from '../images/btn-fanfiction.png';
import inv from '../images/btn-inv.png';
import biogoo from '../images/btn-biogoo.png';

//Buttons Glow
import weirdglow from '../images/btn-wc-glow.png';
import factsglow from '../images/btn-facts-glow.png';
import fanficglow from '../images/btn-fanfic-glow.png';
import invglow from '../images/btn-inv-glow.png';
import biogooglow from '../images/btn-bio-glow.png';

//Tools
import goggles from '../images/Goggle.png';
import hoverboard from '../images/HoverBoard.png';
import teletube from '../images/Teletube.png';
import wcbox from '../images/weirdcreations-box.png';

export const Lab = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    const creationsNav = () => {
        history.push('/weirdcreations');
    }

    const factsNav = () => {
        history.push('/crazyfacts');
    }

    const fanficNav = () => {
        history.push('/fanfiction');
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className = "Lab-Background-Container">
            <img className="dregg" src={DrEgg} alt = "dr egg"/>
            <div className = "button-container">
            <img className="lab-button-inv" src={inv} alt = "inventory button" onMouseOver = {e => e.currentTarget.src = invglow} onMouseOut={e => e.currentTarget.src = inv}/>
                <img className="lab-button-facts" src={facts} alt = "crazy facts button" onClick = {factsNav} onMouseOver = {e => e.currentTarget.src = factsglow} onMouseOut={e => e.currentTarget.src = facts}/>
                <img className="lab-button-wc" src={weird} alt = "weird creations button" onClick = {creationsNav} onMouseOver = {e => e.currentTarget.src = weirdglow} onMouseOut={e => e.currentTarget.src = weird}/>
                <img className="lab-button-fanfic" src={fanfic} alt = "fanfiction button" onClick = {fanficNav} onMouseOver = {e => e.currentTarget.src = fanficglow} onMouseOut={e => e.currentTarget.src = fanfic}/>
                <img className="lab-button-biogoo" src={biogoo} alt = "biogoo button" onMouseOver = {e => e.currentTarget.src = biogooglow} onMouseOut={e => e.currentTarget.src = biogoo}/> 
            </div>
            <img className = "bench" src = {bench} alt = "lab bench"/> 

            <div className = "plank-container">
                <img className = "plank" src = {plank} alt = "plank"/> 
                <p className = "plankname">DR EGG'S ADVENTURES LABORATORY</p>
            </div>

            <div className = "tool-container">
                <img className="tools" src={goggles} alt = "goggles"/>
                <img className="tools" src={hoverboard} alt = "hoverboard"/>
                <img className="tools" src={teletube} alt = "teletube"/>
            </div> 

            <img className = "wc-box" src = {wcbox} alt = "wc box"/> 

            <div className = "Chatbot-Snake">
                <img className = "chatbot" src = {snake} alt = "chatbot" /> 
            </div>
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>

            <img className = "aboriginal-flag" 
            src = {flag} 
            onMouseOver = {e => e.currentTarget.src = flaghover}
            onMouseOut={e => e.currentTarget.src = flag}
            alt = "aboriginal flag"
            onClick = {() => setButtonPopup(true)}/>

            <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                <div>
                    <p className = "popup-text">Dr Egg Adventures would like to acknowledge the Traditional Custodians of the land on, and pay our respects to their Elders past and present.
                    We extend that respect to Aboriginal and Torres Strait Islander peoples on this portal today.</p>  
                </div>
            </Popup>

        </div>
    )
}
export default Lab

